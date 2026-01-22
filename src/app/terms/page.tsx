'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Term Card Component
function TermCard({
  number,
  question,
  children
}: {
  number: string;
  question: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mb-4 sm:mb-6 bg-[#1a2a42] rounded-lg sm:rounded-xl border border-[#2a3a52] overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-3 sm:p-4 md:p-6 flex items-start justify-between text-left hover:bg-[#243550] transition-colors gap-2"
      >
        <div className="flex items-start gap-2 sm:gap-3 md:gap-4 min-w-0">
          <span className="w-8 h-8 sm:w-10 sm:h-10 bg-[#c9a227] text-[#0a1628] rounded-lg sm:rounded-xl flex items-center justify-center text-sm sm:text-lg font-bold flex-shrink-0">
            {number}
          </span>
          <h3 className="text-base sm:text-lg md:text-xl font-bold mt-0.5 sm:mt-1">{question}</h3>
        </div>
        <svg
          className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform mt-1 sm:mt-2 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6 border-t border-[#2a3a52]">
          <div className="pt-3 sm:pt-4 pl-0 sm:pl-10 md:pl-14">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-[#0d1c30] border-b border-[#2a3a52] py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 sm:w-8 sm:h-8 relative">
            <Image src="/nuqta-logo.png" alt="Nuqta" fill className="object-contain" />
          </div>
          <span className="font-bold text-[#c9a227] text-sm sm:text-base">NUQTA</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <Link href="/data-room" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
            Data Room
          </Link>
          <Link href="/memo" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm hidden sm:inline">
            Memo
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
            Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-b from-[#0d1c30] to-[#0a1628] py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-3 sm:px-4 py-1 bg-[#c9a227]/20 border border-[#c9a227]/40 rounded-full text-[#c9a227] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            INVESTMENT TERMS
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4">
            Understanding the Structure
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-6 md:mb-8">
            Transparent explanations for each term decision
          </p>

          {/* Quick Summary */}
          <div className="bg-[#1a2a42] rounded-lg sm:rounded-xl p-4 sm:p-6 border border-[#c9a227]/30 text-left">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-[#c9a227]">$500K</p>
                <p className="text-xs sm:text-sm text-gray-400">Round Size</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">$3M</p>
                <p className="text-xs sm:text-sm text-gray-400">Floor</p>
              </div>
              <div className="text-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold">$10M</p>
                <p className="text-sm text-gray-400">Cap</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">20%</p>
                <p className="text-sm text-gray-400">Discount</p>
              </div>
            </div>
            <p className="text-center text-gray-300 text-sm">
              Instrument: <span className="text-white font-semibold">Convertible Note (CCD)</span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* Summary Statement */}
        <div className="bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl p-6 border border-[#c9a227]/30 mb-12 text-center">
          <p className="text-sm text-[#c9a227] uppercase tracking-wider mb-2">Structure Philosophy</p>
          <p className="text-xl md:text-2xl font-medium leading-relaxed">
            The floor protects early believers. The cap rewards conviction. The discount compensates risk. Pro-rata preserves optionality.
          </p>
        </div>

        {/* Term 1 */}
        <TermCard number="1" question="Why set a $3M valuation floor?">
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              The floor is downside protection, not a valuation assertion. We are pre-revenue, which
              means traditional valuation methods don&apos;t apply. However, significant value has already been
              created through product architecture, market positioning, and strategic planning.
            </p>
            <p>
              Without a floor, early investors face the risk of excessive dilution if market conditions
              temporarily depress the next round&apos;s pricing. The $3M floor ensures that those who take
              the earliest risk receive appropriate protection against short-term market volatility.
            </p>
            <div className="bg-[#0a1628] border border-[#2a3a52] rounded-lg p-4 mt-4">
              <p className="text-white font-medium">The principle: Early believers should be protected from scenarios where their conviction is punished by timing.</p>
            </div>
          </div>
        </TermCard>

        {/* Term 2 */}
        <TermCard number="2" question="How do you justify a $10M cap?">
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              The cap reflects the potential value of the infrastructure position we are building, not
              current traction. Nuqta is positioning as the neutral payment intelligence layer for the
              GCC — a strategic role that doesn&apos;t currently exist in this market.
            </p>
            <p>
              If execution goes well and we raise a strong seed round at a significantly higher
              valuation, the cap ensures early investors share meaningfully in that upside. Without
              a cap, early investors would convert at whatever the next round prices — potentially
              missing the value creation that their early capital enabled.
            </p>
            <div className="bg-[#c9a227]/10 border-l-4 border-[#c9a227] p-4 rounded-r mt-4">
              <p className="text-[#c9a227] font-medium">The cap is about sharing upside, not claiming current value.</p>
            </div>
          </div>
        </TermCard>

        {/* Term 3 */}
        <TermCard number="3" question="What&apos;s the thinking behind the discount rate?">
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              The 20% discount acknowledges the genuine risks early investors are taking: execution
              risk in a new market, product risk before validation, and market timing risk. This
              discount applies when the next round prices below the cap.
            </p>
            <p>
              The discount works alongside the cap and floor, not instead of them. If the seed round
              prices at $8M, early investors convert at an effective $6.4M valuation (20% discount).
              If it prices at $15M, they convert at the $10M cap. If market conditions push the seed
              round to $4M, they convert at the $3M floor.
            </p>
            <div className="bg-[#0a1628] border border-[#2a3a52] rounded-lg p-4 mt-4">
              <p className="text-white font-medium">The discount rewards the time value and risk premium of early capital.</p>
            </div>
          </div>
        </TermCard>

        {/* Term 4 */}
        <TermCard number="4" question="Will early investors have pro-rata rights?">
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p className="text-xl font-bold text-[#c9a227] mb-4">Yes.</p>
            <p>
              Pro-rata rights give early investors the option — not the obligation — to participate
              in subsequent funding rounds to maintain their ownership percentage. This is standard
              practice for early-stage investors and reflects the relationship we want to build.
            </p>
            <p>
              Investors who believe in Nuqta&apos;s trajectory should have the opportunity to double down
              on that conviction. Pro-rata rights enable that without forcing participation if
              circumstances change.
            </p>
            <div className="bg-[#c9a227]/10 border-l-4 border-[#c9a227] p-4 rounded-r mt-4">
              <p className="text-[#c9a227] font-medium">Pro-rata signals partnership alignment, not investor control.</p>
            </div>
          </div>
        </TermCard>

        {/* Term 5 */}
        <TermCard number="5" question="What happens if the next round is flat or down?">
          <div className="text-gray-300 leading-relaxed space-y-4">
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
              <p className="text-blue-400 text-sm font-medium">This scenario is explicitly considered in the structure.</p>
            </div>
            <p>
              The $3M floor exists precisely for this situation. If market conditions, sector
              sentiment, or timing result in a flat or down round, early investors are protected
              from converting at an unreasonably low valuation. The discount still applies, and
              conversion occurs at whichever is most favorable: the discounted seed price, the floor,
              or the actual round price.
            </p>
            <p>
              This protection isn&apos;t about avoiding reality — it&apos;s about ensuring that temporary
              market conditions don&apos;t permanently penalize early conviction. If fundamentals are
              genuinely weak, subsequent rounds will reflect that; but early investors won&apos;t be
              wiped out by bad timing alone.
            </p>
          </div>
        </TermCard>

        {/* Term 6 */}
        <TermCard number="6" question="Why use a convertible note instead of priced equity?">
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              At pre-seed stage, precise valuation is largely artificial. We don&apos;t have the traction
              data that would make a priced round meaningful. A convertible structure lets us raise
              capital efficiently while deferring the valuation question to a point where there&apos;s
              real information to base it on.
            </p>
            <p>
              Convertibles also reduce legal complexity and cost at a stage where every dollar matters.
              The terms are clear, the mechanics are standard, and both parties understand exactly
              what they&apos;re agreeing to. We avoid lengthy negotiations over a valuation number that
              would be guesswork anyway.
            </p>
            <div className="bg-[#0a1628] border border-[#2a3a52] rounded-lg p-4 mt-4">
              <p className="text-white font-medium">Deferring valuation until there&apos;s signal isn&apos;t evasive — it&apos;s honest.</p>
            </div>
          </div>
        </TermCard>

        {/* Term 7 */}
        <TermCard number="7" question="Is there flexibility in these terms?">
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              We&apos;re open to discussion on structure with a lead investor, but we&apos;re disciplined
              about principles. The goal is a partnership that works for both sides over the
              company&apos;s lifetime, not maximum extraction on either end.
            </p>
            <p>
              Our principles are: early investors should be protected, the founder should remain
              motivated through meaningful ownership, and the cap table should remain clean and
              attractive for future rounds. Terms that honor these principles are on the table
              for discussion.
            </p>
            <div className="bg-[#c9a227]/10 border-l-4 border-[#c9a227] p-4 rounded-r mt-4">
              <p className="text-[#c9a227] font-medium">We optimize for long-term partnership, not short-term extraction.</p>
            </div>
          </div>
        </TermCard>

        {/* Summary Table */}
        <div className="mt-12 bg-gradient-to-r from-[#c9a227]/20 to-[#c9a227]/5 rounded-xl p-8 border border-[#c9a227]/30">
          <h2 className="text-xl font-bold text-center mb-6">Terms Summary</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#c9a227]/30">
                  <th className="text-left py-3 px-4 text-gray-400">Term</th>
                  <th className="text-left py-3 px-4 text-gray-400">Value</th>
                  <th className="text-left py-3 px-4 text-gray-400">Purpose</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#2a3a52]/50">
                  <td className="py-3 px-4 font-medium">Instrument</td>
                  <td className="py-3 px-4 text-[#c9a227]">Convertible Note</td>
                  <td className="py-3 px-4 text-gray-400">Efficient capital, deferred pricing</td>
                </tr>
                <tr className="border-b border-[#2a3a52]/50">
                  <td className="py-3 px-4 font-medium">Round Size</td>
                  <td className="py-3 px-4 text-[#c9a227]">$500,000</td>
                  <td className="py-3 px-4 text-gray-400">18-24 month runway to seed metrics</td>
                </tr>
                <tr className="border-b border-[#2a3a52]/50">
                  <td className="py-3 px-4 font-medium">Valuation Floor</td>
                  <td className="py-3 px-4 text-[#c9a227]">$3M</td>
                  <td className="py-3 px-4 text-gray-400">Downside protection for early investors</td>
                </tr>
                <tr className="border-b border-[#2a3a52]/50">
                  <td className="py-3 px-4 font-medium">Valuation Cap</td>
                  <td className="py-3 px-4 text-[#c9a227]">$10M</td>
                  <td className="py-3 px-4 text-gray-400">Upside sharing for early conviction</td>
                </tr>
                <tr className="border-b border-[#2a3a52]/50">
                  <td className="py-3 px-4 font-medium">Discount Rate</td>
                  <td className="py-3 px-4 text-[#c9a227]">20%</td>
                  <td className="py-3 px-4 text-gray-400">Risk premium for early capital</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Pro-rata Rights</td>
                  <td className="py-3 px-4 text-[#c9a227]">Yes</td>
                  <td className="py-3 px-4 text-gray-400">Maintain ownership optionality</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Ready to discuss terms?</p>
          <a
            href="mailto:rejaul@nuqtaapp.com?subject=Investment%20Terms%20Discussion"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors"
          >
            Start Conversation
          </a>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between border-t border-[#2a3a52] pt-8">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← Back to Site
          </Link>
          <div className="flex gap-6">
            <Link href="/data-room" className="text-[#c9a227] hover:text-[#f4d35e] transition-colors">
              Data Room
            </Link>
            <Link href="/memo" className="text-[#c9a227] hover:text-[#f4d35e] transition-colors">
              Investor Memo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
