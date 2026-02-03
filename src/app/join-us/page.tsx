'use client';

import React, { useState } from 'react';
import Link from 'next/link';

/**
 * CO-FOUNDER / CTO RECRUITMENT PAGE
 *
 * Critical hire - Tranche 2 condition (90 days)
 * Target: Technical co-founder with fintech/payments experience
 */

export default function JoinUsPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2d4a] to-[#0a1628] py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
            🔥 CRITICAL HIRE - 90 DAY DEADLINE
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6">
            Co-Founder / <span className="text-[#c9a227]">CTO</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Build the future of offline retail rewards in the GCC. Join as technical co-founder with significant equity.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-[#c9a227]/20 text-[#c9a227] px-4 py-2 rounded-lg">
              📍 Dubai, UAE (Remote-first)
            </div>
            <div className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg">
              💰 15-25% Equity
            </div>
            <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg">
              💵 AED 40-60K/month (negotiable)
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Why This Role Matters */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-[#c9a227] mb-6">Why This Role Matters</h2>
          <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-2 border-red-500/30 rounded-2xl p-6">
            <p className="text-lg text-slate-300 mb-4">
              This is not a regular CTO position. This is a <strong className="text-white">co-founder seat</strong> at
              a pre-seed fintech tackling a $35B GCC opportunity.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-[#c9a227] font-bold mb-2">📊 The Problem</p>
                <p className="text-sm text-slate-400">AED 2.4B wasted annually on broken loyalty programs. 95% of offline spending gets zero rewards.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <p className="text-[#c9a227] font-bold mb-2">🎯 The Solution</p>
                <p className="text-sm text-slate-400">Universal rewards + merchant POS system + habit loops = defensible moats competitors can't copy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Build */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-[#c9a227] mb-6">What You'll Build</h2>
          <div className="space-y-4">
            {[
              {
                icon: '📱',
                title: 'Consumer Mobile App',
                description: 'React Native app with gamified rewards, daily check-ins, and social features. Target: 8+ opens/month engagement.',
              },
              {
                icon: '🏪',
                title: 'Merchant Platform',
                description: 'POS integration, real-time analytics, campaign management. This is our primary moat - high switching costs.',
              },
              {
                icon: '💳',
                title: 'Payments Infrastructure',
                description: 'Dual coin system (Nuqta Coin + Brand Coins), float management, potential SVF license integration.',
              },
              {
                icon: '🧠',
                title: 'Recommendation Engine',
                description: 'ML-powered merchant discovery, personalized offers, and behavioral predictions.',
              },
              {
                icon: '📊',
                title: 'Real-Time Analytics',
                description: 'Transaction processing, merchant dashboards, user behavior analytics, A/B testing framework.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-[#c9a227]/50 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-slate-400">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-[#c9a227] mb-6">Tech Stack (Flexible)</h2>
          <p className="text-slate-400 mb-6">
            We're open to your recommendations. Current thinking:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { category: 'Frontend', stack: ['React Native', 'Next.js', 'TypeScript', 'Tailwind'] },
              { category: 'Backend', stack: ['Node.js / Go', 'PostgreSQL', 'Redis', 'GraphQL'] },
              { category: 'Infrastructure', stack: ['AWS / GCP', 'Kubernetes', 'Terraform', 'DataDog'] },
            ].map((item, i) => (
              <div key={i} className="bg-white/5 rounded-xl p-5">
                <h3 className="text-lg font-bold text-[#c9a227] mb-3">{item.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech, j) => (
                    <span key={j} className="bg-white/10 text-slate-300 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-[#c9a227] mb-6">Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-emerald-400 mb-4">Must Have</h3>
              <ul className="space-y-3">
                {[
                  '8+ years software engineering experience',
                  'Fintech, payments, or loyalty systems background',
                  'Led engineering team of 5+ people',
                  'Shipped consumer-facing mobile apps',
                  'Can write code AND lead architecture decisions',
                  'Comfortable with pre-seed startup uncertainty',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-400">✓</span>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-400 mb-4">Nice to Have</h3>
              <ul className="space-y-3">
                {[
                  'GCC/MENA market experience',
                  'SVF/payments licensing knowledge',
                  'Previous co-founder/founding engineer experience',
                  'Arabic speaker (not required)',
                  'POS integration experience',
                  'ML/personalization background',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-blue-400">+</span>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Compensation */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-[#c9a227] mb-6">Compensation Package</h2>
          <div className="bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border-2 border-[#c9a227]/30 rounded-2xl p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-4xl font-black text-[#c9a227] mb-2">15-25%</p>
                <p className="text-slate-400">Co-Founder Equity</p>
                <p className="text-xs text-slate-500 mt-1">4-year vest, 1-year cliff</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black text-emerald-400 mb-2">AED 40-60K</p>
                <p className="text-slate-400">Monthly Salary</p>
                <p className="text-xs text-slate-500 mt-1">Negotiable for right candidate</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-black text-blue-400 mb-2">Day 1</p>
                <p className="text-slate-400">Board Observer Seat</p>
                <p className="text-xs text-slate-500 mt-1">Full visibility into company</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-center text-slate-400">
                <strong className="text-white">Exit Potential:</strong> At $1.2B exit (base case), 15% = $180M • 25% = $300M
              </p>
            </div>
          </div>
        </section>

        {/* Why Now */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-[#c9a227] mb-6">Why Now?</h2>
          <div className="space-y-4">
            {[
              {
                title: 'Pre-Seed Stage',
                description: 'Maximum equity, maximum impact. Shape the company from day one.',
              },
              {
                title: '12-18 Month Window',
                description: 'First-mover advantage in GCC offline rewards before Careem/Noon move.',
              },
              {
                title: 'Funding Secured',
                description: '$400K committed at $5M cap. Your hire unlocks $200K Tranche 2.',
              },
              {
                title: 'Clear Technical Vision',
                description: 'Product spec ready. Need execution partner, not idea person.',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-white/5 rounded-xl p-4">
                <div className="w-8 h-8 bg-[#c9a227] rounded-full flex items-center justify-center text-[#0a1628] font-bold flex-shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-[#c9a227] mb-6">Your First 90 Days</h2>
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#c9a227]/30"></div>
            <div className="space-y-6">
              {[
                { week: 'Week 1-2', title: 'Onboarding', tasks: ['Deep dive on product spec', 'Meet key stakeholders', 'Review tech decisions'] },
                { week: 'Week 3-4', title: 'Architecture', tasks: ['Finalize tech stack', 'Set up infrastructure', 'Hire first engineer'] },
                { week: 'Week 5-8', title: 'Build', tasks: ['MVP development sprint', 'POS integration POC', 'Core app features'] },
                { week: 'Week 9-12', title: 'Launch', tasks: ['Beta with 10 merchants', 'Feb 28 public launch', 'Scale team to 4+'] },
              ].map((phase, i) => (
                <div key={i} className="relative pl-12">
                  <div className="absolute left-2 w-4 h-4 bg-[#c9a227] rounded-full border-4 border-[#0a1628]"></div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#c9a227] font-mono text-sm">{phase.week}</span>
                      <span className="text-white font-bold">{phase.title}</span>
                    </div>
                    <ul className="text-slate-400 text-sm space-y-1">
                      {phase.tasks.map((task, j) => (
                        <li key={j}>• {task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Nuqta */}
        <section className="mb-16">
          <h2 className="text-3xl font-black text-[#c9a227] mb-6">About Nuqta</h2>
          <div className="bg-white/5 rounded-2xl p-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <p className="text-slate-400 mb-4">
                  Nuqta is building the universal rewards layer for offline retail in the GCC.
                  Think "Starbucks Rewards for every store" with merchant-side tools that create lock-in.
                </p>
                <p className="text-slate-400">
                  We're not another cashback app. Our POS system, daily habit loops, and event infrastructure
                  create moats that pure-play competitors can't replicate.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Market Size (GCC SAM)</span>
                  <span className="text-white font-bold">$35B</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Funding Raised</span>
                  <span className="text-white font-bold">$400K @ $5M cap</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Launch Date</span>
                  <span className="text-white font-bold">Feb 28, 2026</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">H1 Target</span>
                  <span className="text-white font-bold">5K MAU, 250 merchants</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">Base Case Exit</span>
                  <span className="text-white font-bold">$1.2B (Year 5)</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/deck-kang" className="text-[#c9a227] hover:text-white transition-colors text-sm underline">
                View Investor Deck →
              </Link>
              <Link href="/data-room" className="text-[#c9a227] hover:text-white transition-colors text-sm underline">
                View Data Room →
              </Link>
              <Link href="/team" className="text-[#c9a227] hover:text-white transition-colors text-sm underline">
                View Full Team Plan →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-br from-[#c9a227]/20 to-amber-500/20 border-2 border-[#c9a227] rounded-2xl p-8">
            <h2 className="text-3xl font-black text-white mb-4">Ready to Build Something Big?</h2>
            <p className="text-slate-300 mb-6 max-w-xl mx-auto">
              If this sounds like you, let's talk. We move fast - expect a response within 48 hours.
            </p>

            {!showForm ? (
              <div className="space-y-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-[#c9a227] text-[#0a1628] px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#d4b13a] transition-colors"
                >
                  Apply Now →
                </button>
                <p className="text-slate-500 text-sm">
                  Or email directly: <a href="mailto:founder@nuqta.ae" className="text-[#c9a227] hover:underline">founder@nuqta.ae</a>
                </p>
              </div>
            ) : (
              <div className="bg-white/5 rounded-xl p-6 max-w-lg mx-auto text-left">
                <h3 className="text-xl font-bold text-white mb-4">Quick Application</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-slate-400 text-sm mb-1">Your Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#c9a227]"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-1">LinkedIn Profile</label>
                    <input
                      type="url"
                      placeholder="linkedin.com/in/yourprofile"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#c9a227]"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 text-sm mb-1">Why Nuqta? (2-3 sentences)</label>
                    <textarea
                      rows={3}
                      placeholder="What excites you about this opportunity?"
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-[#c9a227]"
                    />
                  </div>
                  <div className="flex gap-3">
                    <a
                      href="mailto:founder@nuqta.ae?subject=Co-Founder/CTO Application"
                      className="flex-1 bg-[#c9a227] text-[#0a1628] px-6 py-3 rounded-lg font-bold text-center hover:bg-[#d4b13a] transition-colors"
                    >
                      Send Application
                    </a>
                    <button
                      onClick={() => setShowForm(false)}
                      className="px-6 py-3 border border-white/20 rounded-lg text-slate-400 hover:text-white transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Footer Links */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <Link href="/" className="text-slate-500 hover:text-[#c9a227] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
