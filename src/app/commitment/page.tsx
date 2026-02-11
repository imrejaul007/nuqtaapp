'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import GlobalFooter from '@/components/GlobalFooter';

// Commitment Section Component
function CommitmentSection({
  number,
  title,
  summary,
  children
}: {
  number: string;
  title: string;
  summary: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-4 sm:mb-6 bg-[#1a2a42] rounded-lg sm:rounded-xl border border-[#2a3a52] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 sm:p-4 md:p-6 text-left flex items-start gap-2 sm:gap-3 md:gap-4 hover:bg-[#1f3050] transition-colors"
      >
        <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center font-bold text-sm sm:text-lg">
          {number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-0.5 sm:mb-1">{title}</h3>
          <p className="text-purple-400 text-xs sm:text-sm line-clamp-2">{summary}</p>
        </div>
        <svg
          className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform mt-0.5 sm:mt-1 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6 pt-0 border-t border-[#2a3a52]">
          <div className="pt-3 sm:pt-4 pl-0 sm:pl-10 md:pl-14">{children}</div>
        </div>
      )}
    </div>
  );
}

export default function FounderCommitment() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-[#0a1628] border-b border-[#1a2a42] py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 sm:w-8 sm:h-8 relative">
            <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain" />
          </div>
          <span className="font-bold text-sm sm:text-base">NUQTA</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/data-room" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
            Data Room
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
            Back
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-b from-purple-900/20 to-transparent py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-purple-400 text-xs sm:text-sm font-medium uppercase tracking-wider mb-2 sm:mb-3">Personal Accountability</p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Founder Commitment</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-6 md:mb-8">
            Structure that aligns interests for the long term
          </p>
          <div className="inline-block bg-[#1a2a42] rounded-lg sm:rounded-xl px-4 sm:px-6 py-3 sm:py-4 border border-[#2a3a52]">
            <p className="text-sm sm:text-base text-gray-300 italic">&quot;Commitment isn&apos;t measured by promises — it&apos;s measured by structure.&quot;</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12">

        {/* Section 1: Compensation */}
        <CommitmentSection
          number="1"
          title="Founder Compensation"
          summary="Modest salary aligned with runway discipline, not personal extraction"
        >
          <div className="space-y-4 text-gray-300">
            <p className="leading-relaxed">
              Before funding closes, I draw no salary from the company. After funding, compensation
              is set at a level that covers basic living expenses without extracting meaningful
              value from the business. This is deliberate: the goal is building company equity,
              not converting investor capital into personal income.
            </p>
            <p className="leading-relaxed">
              Post-funding salary is fixed, reviewed annually with investor input, and explicitly
              designed to maintain personal stability while preserving runway. The commitment here
              is transparency: investors can see exactly what the founder costs and how that aligns
              with capital discipline.
            </p>
            </div>
        </CommitmentSection>

        {/* Section 2: Physical Presence */}
        <CommitmentSection
          number="2"
          title="Regional Commitment"
          summary="Building where the business operates — this is a GCC company, not a remote project"
        >
          <div className="space-y-4 text-gray-300">
            <p className="leading-relaxed">
              Nuqta is a UAE-first company, and my physical presence aligns with where the business
              operates. During the build and launch phases, I am committed to being present in the
              market — available for merchant meetings, partner conversations, hiring, and investor updates.
            </p>
            <p className="leading-relaxed">
              Travel for personal or professional reasons doesn&apos;t mean disengagement. The commitment
              is to be reachable and present when the business requires it, not to be permanently
              desk-bound in Dubai. But the default assumption should be clear: this is not a remote
              side project being run from another country.
            </p>
            <div className="bg-[#0a1628] rounded-lg p-4 border border-purple-500/30">
              <p className="text-white font-medium">&quot;Nuqta is being built for the region, in the region.&quot;</p>
            </div>
            </div>
        </CommitmentSection>

        {/* Section 3: Focus */}
        <CommitmentSection
          number="3"
          title="Exclusive Focus"
          summary="Nuqta is the sole professional commitment — no divided attention"
        >
          <div className="space-y-4 text-gray-300">
            <p className="leading-relaxed">
              There is no employment elsewhere, no active consulting contracts, no parallel startups,
              and no advisory commitments that would create competing demands on time or attention.
              The entirety of professional focus goes to Nuqta.
            </p>
            <p className="leading-relaxed">
              This is a simple commitment but an important one. Many early-stage ventures fail not
              because the idea was wrong, but because the founder&apos;s attention was split between
              too many opportunities. That isn&apos;t the case here.
            </p>
            </div>
        </CommitmentSection>

        {/* Section 4: Conflicts */}
        <CommitmentSection
          number="4"
          title="Conflict Management"
          summary="IP and energy are exclusively dedicated to Nuqta — no hidden competing interests"
        >
          <div className="space-y-4 text-gray-300">
            <p className="leading-relaxed">
              There are no side projects, no parallel ventures, and no undisclosed business interests
              that could compete with Nuqta for attention or resources. Any future opportunities that
              arise will be disclosed and, where appropriate, approved at the board level before
              any commitment is made.
            </p>
            <p className="leading-relaxed">
              Intellectual property developed for Nuqta belongs to Nuqta — not to the founder personally,
              and not shared with any other venture. Time, energy, and creative focus are exclusively
              directed toward building this company.
            </p>
            </div>
        </CommitmentSection>

        {/* Section 5: Governance */}
        <CommitmentSection
          number="5"
          title="Structural Accountability"
          summary="Standard vesting and governance controls that make commitment contractual"
        >
          <div className="space-y-4 text-gray-300">
            <p className="leading-relaxed">
              Founder equity is subject to a four-year vesting schedule with a one-year cliff and
              bad-leaver provisions. This isn&apos;t unusual — it&apos;s standard governance — but it&apos;s
              worth stating explicitly because it means commitment is structural, not just verbal.
            </p>
            <p className="leading-relaxed">
              Walking away early is expensive. Departing under adverse circumstances forfeits unvested
              equity. The structure is designed to ensure that long-term value creation is the only
              path to meaningful founder returns. Early exit, distraction, or abandonment are
              economically penalized.
            </p>
            <div className="bg-[#0a1628] rounded-lg p-4 border border-purple-500/30 mb-4">
              <p className="text-white font-medium">
                Commitment is contractual, not emotional. The structure ensures alignment regardless of circumstance.
              </p>
            </div>
            </div>
        </CommitmentSection>

        {/* Section 6: Execution Velocity */}
        <CommitmentSection
          number="6"
          title="Execution Velocity"
          summary="Speed is the only moat in Year 1 — aggressive execution milestones with accountability"
        >
          <div className="space-y-4 text-gray-300">
            <p className="leading-relaxed font-medium text-white">
              Speed is the only moat in Year 1. I commit to aggressive execution milestones:
            </p>
            <div className="space-y-3 ml-1">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="leading-relaxed">
                  <span className="font-semibold text-white">Launch:</span> MVP live March 1, 2026 (not &apos;coming soon&apos;)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="leading-relaxed">
                  <span className="font-semibold text-white">Week 1 Target:</span> 5 merchants live, 100 users, AED 5-10K GMV
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="leading-relaxed">
                  <span className="font-semibold text-white">90-Day Validation:</span> 500 users, 10 merchants, AED 30K GMV, D30 ≥20%
                </p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="leading-relaxed">
                  <span className="font-semibold text-white">Weekly Investor Updates:</span> Every Friday, metrics + learnings + next steps
                </p>
              </div>
            </div>
            <div className="bg-[#0a1628] rounded-lg p-4 border border-purple-500/30 mt-4">
              <p className="text-white font-medium">
                <span className="text-purple-400">Accountability:</span> If we miss 90-day milestones by &gt;30%, I commit to pivoting or returning unspent capital.
              </p>
            </div>
          </div>
        </CommitmentSection>

        {/* Summary Statement */}
        <div className="mt-12 mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-[#c9a227] text-[#0a1628] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </span>
            Summary Statement
          </h2>
          <p className="text-sm text-gray-400 mb-4">For data room or email communication:</p>
          <div className="bg-white text-gray-900 rounded-xl p-6 border-l-4 border-purple-600">
            <p className="leading-relaxed">
              The founder is fully committed to Nuqta as a long-term, GCC-based company. Full-time focus
              is dedicated exclusively to building this business, with no side projects or competing
              commitments. Compensation post-funding is structured modestly and aligned with runway
              discipline. Founder equity is subject to standard vesting with cliff and governance controls
              that make long-term alignment contractual. Physical presence is aligned with regional
              operations, and the company is being built as infrastructure designed to outlast any
              individual involvement.
            </p>
          </div>
        </div>

        {/* Trust Framework */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-purple-600 text-white rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </span>
            Addressing Investor Concerns
          </h2>
          <p className="text-gray-400 mb-6">Common questions this structure answers:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#1a2a42] rounded-lg p-4 border border-[#2a3a52]">
              <p className="text-gray-400 text-sm mb-1">&quot;Will the founder be around for the long term?&quot;</p>
              <p className="text-green-400 font-bold">Yes — vesting and governance ensure it.</p>
            </div>
            <div className="bg-[#1a2a42] rounded-lg p-4 border border-[#2a3a52]">
              <p className="text-gray-400 text-sm mb-1">&quot;Is this founder financially aligned?&quot;</p>
              <p className="text-green-400 font-bold">Yes — modest salary, equity upside.</p>
            </div>
            <div className="bg-[#1a2a42] rounded-lg p-4 border border-[#2a3a52]">
              <p className="text-gray-400 text-sm mb-1">&quot;Is this a serious commitment or a side project?&quot;</p>
              <p className="text-green-400 font-bold">Serious — exclusive focus, regional presence.</p>
            </div>
            <div className="bg-[#1a2a42] rounded-lg p-4 border border-[#2a3a52]">
              <p className="text-gray-400 text-sm mb-1">&quot;Are these commitments enforceable?&quot;</p>
              <p className="text-green-400 font-bold">Yes — contractual through vesting and governance.</p>
            </div>
          </div>
        </div>

        {/* Closing Statement */}
        <div className="bg-gradient-to-r from-purple-900/40 to-[#c9a227]/20 rounded-2xl p-8 text-center border border-purple-500/30">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">The principle</p>
          <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
            Structure demonstrates commitment<br />
            <span className="text-[#c9a227]">more reliably than words ever could.</span>
          </p>
        </div>

        {/* Footer Navigation */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#1a2a42] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/data-room"
              className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
            >
              &larr; Data Room
            </Link>
            <Link
              href="/terms"
              className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm"
            >
              CCD Terms &rarr;
            </Link>
          </div>
          <a
            href="mailto:rejaul@nuqtapp.com?subject=Nuqta%20Investment%20Discussion"
            className="px-4 sm:px-6 py-2 sm:py-3 bg-[#c9a227] text-[#0a1628] rounded-lg font-semibold hover:bg-[#f4d35e] transition-colors text-sm sm:text-base"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    <GlobalFooter />
    </div>
  );
}
