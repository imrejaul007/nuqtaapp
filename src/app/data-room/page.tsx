'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Folder Component
function Folder({
  icon,
  title,
  id,
  children
}: {
  icon: string;
  title: string;
  id: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div id={id} className="mb-4 sm:mb-6 md:mb-8 scroll-mt-20 sm:scroll-mt-24">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#1a2a42] rounded-t-lg sm:rounded-t-xl p-3 sm:p-4 md:p-5 flex items-center justify-between hover:bg-[#243550] transition-colors border border-[#2a3a52] border-b-0"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          <span className="text-xl sm:text-2xl">{icon}</span>
          <h2 className="text-base sm:text-lg md:text-xl font-bold">{title}</h2>
        </div>
        <svg
          className={`w-4 h-4 sm:w-5 sm:h-5 text-gray-400 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="bg-[#0d1c30] rounded-b-lg sm:rounded-b-xl border border-[#2a3a52] border-t-0 p-3 sm:p-4 md:p-6">
          {children}
        </div>
      )}
    </div>
  );
}

// Document Item Component
function DocItem({
  number,
  title,
  children
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#2a3a52] last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 sm:py-4 flex items-center justify-between text-left hover:text-[#c9a227] transition-colors gap-2"
      >
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <span className="w-6 h-6 sm:w-8 sm:h-8 bg-[#c9a227]/20 text-[#c9a227] rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0">
            {number}
          </span>
          <span className="font-medium text-sm sm:text-base truncate">{title}</span>
        </div>
        <svg
          className={`w-4 h-4 text-gray-500 transition-transform flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-4 sm:pb-6 pl-8 sm:pl-11 pr-2 sm:pr-4">
          <div className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

// Status Badge
function Status({ status }: { status: 'complete' | 'planned' | 'in-progress' }) {
  const styles = {
    complete: 'bg-green-500/20 text-green-400 border-green-500/30',
    planned: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'in-progress': 'bg-blue-500/20 text-blue-400 border-blue-500/30'
  };
  const labels = {
    complete: 'Complete',
    planned: 'Planned',
    'in-progress': 'In Progress'
  };

  return (
    <span className={`text-xs px-2 py-1 rounded border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

export default function DataRoomPage() {
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
          <Link href="/memo" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
            Memo
          </Link>
          <Link href="/" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">
            Home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-b from-[#0d1c30] to-[#0a1628] py-8 sm:py-12 md:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 sm:px-4 py-1 bg-[#c9a227]/20 border border-[#c9a227]/40 rounded-full text-[#c9a227] text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            INVESTOR DATA ROOM
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4">
            Due Diligence Materials
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-6 md:mb-8">
            Comprehensive documentation for investor review
          </p>

          {/* Quick Navigation */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              { icon: '📁', label: 'Legal', href: '#legal' },
              { icon: '💻', label: 'Product', href: '#product' },
              { icon: '📊', label: 'Market', href: '#market' },
              { icon: '💰', label: 'Financials', href: '#financials' },
              { icon: '⚖️', label: 'Governance', href: '#governance' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2 bg-[#1a2a42] rounded-lg border border-[#2a3a52] hover:border-[#c9a227]/50 transition-colors text-xs sm:text-sm"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12">

        {/* Status Overview */}
        <div className="bg-[#1a2a42] rounded-lg sm:rounded-xl p-4 sm:p-6 border border-[#2a3a52] mb-6 sm:mb-8 md:mb-12">
          <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Documentation Status</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-4">
            {[
              { area: 'Legal Structure', status: 'complete' as const },
              { area: 'IP Ownership', status: 'complete' as const },
              { area: 'Product Scope', status: 'complete' as const },
              { area: 'Market Logic', status: 'complete' as const },
              { area: 'Governance', status: 'complete' as const },
            ].map((item) => (
              <div key={item.area} className="text-center">
                <p className="text-sm text-gray-400 mb-2">{item.area}</p>
                <Status status={item.status} />
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 1: COMPANY & LEGAL */}
        <Folder icon="📁" title="1. Company & Legal" id="legal">
          <DocItem number="1" title="Corporate Structure">
            <p className="mb-4">
              Nuqta is incorporated in a stable, investor-friendly jurisdiction within the UAE ecosystem
              (DIFC/ADGM structure under consideration). The corporate structure is designed specifically
              to accommodate foreign investment, convertible instruments, and future cap table evolution
              without friction.
            </p>
            <p className="mb-4">
              All standard corporate documents are maintained including Certificate of Incorporation,
              Memorandum and Articles of Association, and share class documentation. The entity structure
              ensures clean separation between founder and company, with all business activities conducted
              through the corporate entity.
            </p>
            </DocItem>

          <DocItem number="2" title="Cap Table & Shareholding">
            <p className="mb-4">
              The current cap table is clean and straightforward. Prior to this investment round,
              the founder holds 100% of ordinary shares with no hidden shareholders, side agreements,
              or outstanding debt obligations. This simplicity is intentional — it provides maximum
              flexibility for structuring the pre-seed round and subsequent funding.
            </p>
            <p className="mb-4">
              Post-investment, CCD holders will convert at the next priced round according to
              standard convertible note mechanics. Pro-rata rights are offered to early investors,
              and the cap table will remain transparent and auditable throughout the company&apos;s growth.
            </p>
          </DocItem>

          <DocItem number="3" title="Founder Vesting">
            <p className="mb-4">
              Founder equity is subject to a standard four-year vesting schedule with a one-year cliff.
              This structure aligns founder incentives with long-term company success and provides
              investors with protection against early founder departure.
            </p>
            <p className="mb-4">
              Bad-leaver provisions are in place, meaning unvested shares are forfeited if the founder
              departs under adverse circumstances. Good-leaver scenarios receive standard vesting treatment.
              This governance structure demonstrates commitment to building a company that outlives any
              individual involvement.
            </p>
          </DocItem>

          <DocItem number="4" title="Intellectual Property">
            <p className="mb-4">
              All intellectual property created for Nuqta — including product code, designs, branding,
              and trademarks — is owned by the company, not by the founder personally. Any external
              contributors are required to sign IP assignment agreements ensuring clean ownership transfer.
            </p>
            <p className="mb-4">
              Trademark applications for Nuqta branding (including Arabic نقطة) are in progress.
              The IP portfolio will be documented and maintained as a company asset, ensuring that
              the company&apos;s value is not dependent on any individual&apos;s personal ownership claims.
            </p>
          </DocItem>
        </Folder>

        {/* SECTION 2: PRODUCT */}
        <Folder icon="💻" title="2. Product" id="product">
          <DocItem number="5" title="Product Roadmap">
            <div className="space-y-6">
              <div className="bg-[#1a2a42] rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-bold text-blue-400">Phase 1: Foundation (Months 1-6)</p>
                  <Status status="in-progress" />
                </div>
                <p className="text-gray-300 mb-3">
                  Core MVP development focused on payment intelligence using a rules-based recommendation engine.
                  Universal Nuqta points system with visit-based loyalty mechanics. QR-code based earning flow
                  requiring no hardware integration. Basic merchant dashboard for campaign management.
                  Initial launch limited to Dubai in select high-frequency categories.
                </p>
                <p className="text-[#c9a227] text-sm"><strong>Success metric:</strong> Validated repeat usage patterns and measurable merchant ROI</p>
              </div>

              <div className="bg-[#1a2a42] rounded-lg p-4 border-l-4 border-yellow-500">
                <p className="font-bold text-yellow-400 mb-2">Phase 2: Expansion (Months 6-12)</p>
                <p className="text-gray-300">
                  Scale merchant network to 500+ locations. Expand into grocery and daily essentials categories.
                  Deepen BNPL provider integrations with direct API connections. Introduce loyalty tiers and
                  streak-based engagement mechanics. Enhance recommendation engine with behavioral signals.
                </p>
              </div>

              <div className="bg-[#1a2a42] rounded-lg p-4 border-l-4 border-green-500">
                <p className="font-bold text-green-400 mb-2">Phase 3: Platform Maturity (Months 12-24)</p>
                <p className="text-gray-300">
                  Multi-city expansion across UAE and initial GCC markets. Bank partnership integrations
                  for deeper card intelligence. Advanced ML-powered payment recommendations. Enterprise
                  merchant tools and analytics platform.
                </p>
              </div>
            </div>
          </DocItem>

          <DocItem number="6" title="MVP Definition">
            <p className="mb-4">
              The MVP is intentionally constrained to validate core hypotheses before investing in complexity.
              We are building just enough to prove that users will repeatedly engage with payment recommendations
              and that merchants will pay for customer loyalty tools.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/30">
                <p className="font-bold text-green-400 mb-3">Included in MVP</p>
                <p className="text-gray-300 text-sm">
                  Payment recommendation engine (rules-based), universal rewards wallet, visit-based
                  loyalty tracking, merchant QR tools, and manual offer curation system.
                </p>
              </div>
              <div className="bg-red-500/10 rounded-lg p-4 border border-red-500/30">
                <p className="font-bold text-red-400 mb-3">Excluded from MVP</p>
                <p className="text-gray-300 text-sm">
                  Deep POS integrations, advanced ML models, direct bank API connections,
                  and cross-border rewards functionality.
                </p>
              </div>
            </div>
            </DocItem>

          <DocItem number="7" title="Technical Architecture">
            <p className="mb-4">
              The technical architecture prioritizes security, scalability, and compliance while remaining
              lean enough for a pre-seed stage company. We are not over-engineering for hypothetical scale.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div>
                <p className="font-semibold text-white mb-2">Frontend</p>
                <p className="text-gray-300 text-sm">
                  Native mobile applications for iOS and Android with a responsive web dashboard for merchants.
                  Clean, performant UI prioritizing transaction speed and minimal friction.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Backend</p>
                <p className="text-gray-300 text-sm">
                  Cloud-based microservices architecture with a dedicated rules engine for recommendations.
                  Event-driven transaction processing with comprehensive audit logging.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Data Handling</p>
                <p className="text-gray-300 text-sm">
                  No card numbers stored. Tokenized user identifiers with minimal PII collection.
                  Privacy-first design that complies with regional data protection requirements.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Security</p>
                <p className="text-gray-300 text-sm">
                  Role-based access controls, encrypted data at rest and in transit,
                  and compliance-aware architecture designed for financial services adjacent applications.
                </p>
              </div>
            </div>
          </DocItem>
        </Folder>

        {/* SECTION 3: MARKET & STRATEGY */}
        <Folder icon="📊" title="3. Market & Strategy" id="market">
          <DocItem number="8" title="Market Sizing">
            <p className="mb-4">
              Our market analysis focuses on realistic capture rather than inflated TAM figures.
              We are building for the GCC, starting with UAE, and our assumptions reflect actual
              payment volumes and merchant economics.
            </p>
            <div className="space-y-4 mt-4">
              <div className="bg-[#1a2a42] rounded-lg p-4">
                <p className="font-bold text-[#c9a227] mb-2">Total Addressable Market (GCC)</p>
                <p className="text-gray-300 text-sm">
                  GCC consumer spending exceeds $600B annually across high card penetration markets.
                  Our infrastructure layer can theoretically touch all digital transactions that involve
                  payment decisions or loyalty mechanics.
                </p>
              </div>
              <div className="bg-[#1a2a42] rounded-lg p-4">
                <p className="font-bold text-[#c9a227] mb-2">Serviceable Addressable Market (UAE + KSA)</p>
                <p className="text-gray-300 text-sm">
                  Approximately 5M active digital consumers in UAE and urban KSA represent $40-50B
                  in addressable transaction volume. These are users who actively use multiple payment
                  methods and are receptive to optimization tools.
                </p>
              </div>
              <div className="bg-[#1a2a42] rounded-lg p-4">
                <p className="font-bold text-[#c9a227] mb-2">Serviceable Obtainable Market (Initial Target)</p>
                <p className="text-gray-300 text-sm">
                  High-frequency daily categories in Dubai: cafes, grocery, salons, pharmacies, and clinics.
                  These verticals have repeat purchase behavior that rewards loyalty investment and supports
                  our city-by-city expansion strategy.
                </p>
              </div>
            </div>
          </DocItem>

          <DocItem number="9" title="Go-to-Market Strategy">
            <p className="mb-4">
              Our GTM strategy prioritizes depth over breadth. We are not attempting to boil the ocean
              with a nationwide launch. Instead, we focus on concentrated geographic and vertical expansion
              that builds genuine network effects.
            </p>
            <div className="space-y-4 mt-4">
              <div>
                <p className="font-semibold text-white mb-2">Phase 1: Merchant-Led Acquisition</p>
                <p className="text-gray-300 text-sm">
                  On-counter QR codes drive organic user acquisition. Staff-assisted onboarding reduces
                  friction. Loyal customers become natural referral sources. This approach inverts typical
                  consumer app acquisition costs.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Phase 2: Habit Formation</p>
                <p className="text-gray-300 text-sm">
                  The Smart Pay Advisor creates the engagement hook — users open the app to check payment
                  recommendations before purchasing. Monthly savings summaries and streak rewards reinforce
                  habitual usage patterns.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-2">Phase 3: Partnership Leverage</p>
                <p className="text-gray-300 text-sm">
                  BNPL referral partnerships expand reach without acquisition cost. Fintech co-marketing
                  agreements access established user bases. Local ecosystem partnerships provide distribution
                  leverage.
                </p>
              </div>
            </div>
          </DocItem>

          <DocItem number="10" title="Merchant Strategy">
            <p className="mb-4">
              Merchant onboarding is designed for zero friction. We are not asking merchants to install
              hardware, sign long contracts, or pay upfront fees. Performance-based pricing means merchants
              only pay when Nuqta delivers measurable value.
            </p>
            <div className="mt-4">
              <p className="font-semibold text-white mb-2">Initial 50-100 Merchant Pilot</p>
              <p className="text-gray-300 text-sm mb-4">
                Hyperlocal focus on neighborhoods with high foot traffic and repeat purchase behavior.
                Personal introductions through founder network and warm referrals. These merchants become
                case studies and references for broader expansion.
              </p>
              <p className="font-semibold text-white mb-2">Onboarding Flow</p>
              <p className="text-gray-300 text-sm">
                No hardware required — QR-based implementation. No lengthy contracts — month-to-month
                commitment. Performance pricing — merchants pay for verified visits and conversions.
                Clear ROI visibility — dashboard shows customer return rates and revenue attribution.
              </p>
            </div>
          </DocItem>
        </Folder>

        {/* SECTION 4: FINANCIALS */}
        <Folder icon="💰" title="4. Financials" id="financials">
          <DocItem number="11" title="Runway & Milestones">
            <p className="mb-4">
              The pre-seed round is sized to provide 18-24 months of runway with disciplined spending.
              Our objective during this period is proving core assumptions, not achieving scale.
              We will reach seed-ready metrics or pivot before burning through capital.
            </p>
            <div className="bg-[#1a2a42] rounded-lg p-4 mt-4">
              <p className="font-semibold text-white mb-2">Key Milestones for This Runway</p>
              <p className="text-gray-300 text-sm">
                Launch functional MVP in Dubai market. Onboard 50-100 pilot merchants with measurable
                engagement. Validate repeat usage behavior with cohort data. Demonstrate merchant ROI
                through retention and revenue metrics. Establish initial BNPL partnership with revenue
                potential. Reach metrics that support a credible seed round narrative.
              </p>
            </div>
          </DocItem>

          <DocItem number="12" title="Burn Rate">
            <p className="mb-4">
              We operate with pre-seed discipline. Monthly burn is targeted below $40K during the
              build and validation phase, scaling modestly as we prove traction. Capital efficiency
              is a core value, not just a constraint.
            </p>
            <div className="bg-[#1a2a42] rounded-lg p-4 mt-4">
              <p className="text-3xl font-bold text-[#c9a227] mb-2">&lt;$40K/month</p>
              <p className="text-gray-400 text-sm">Target early-stage monthly burn</p>
            </div>
            <div className="mt-4">
              <p className="font-semibold text-white mb-2">Primary Cost Categories</p>
              <p className="text-gray-300 text-sm">
                Product development and engineering resources. Merchant onboarding operations and
                support. Cloud infrastructure and tooling. Legal and compliance requirements.
                Limited marketing spend focused on validation, not growth.
              </p>
            </div>
          </DocItem>

          <DocItem number="13" title="Use of Funds">
            <p className="mb-4">
              Capital allocation reflects our stage-appropriate priorities. The majority goes to
              product development and merchant operations — the two areas that directly prove our
              core hypotheses.
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#2a3a52]">
                    <th className="text-left py-2 px-3 text-gray-400 font-medium">Category</th>
                    <th className="text-left py-2 px-3 text-gray-400 font-medium">Allocation</th>
                    <th className="text-left py-2 px-3 text-gray-400 font-medium">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#2a3a52]/50">
                    <td className="py-2 px-3">Product & Engineering</td>
                    <td className="py-2 px-3 text-[#c9a227]">35%</td>
                    <td className="py-2 px-3 text-gray-400">MVP development, iteration</td>
                  </tr>
                  <tr className="border-b border-[#2a3a52]/50">
                    <td className="py-2 px-3">Merchant Operations</td>
                    <td className="py-2 px-3 text-[#c9a227]">25%</td>
                    <td className="py-2 px-3 text-gray-400">Onboarding, support, success</td>
                  </tr>
                  <tr className="border-b border-[#2a3a52]/50">
                    <td className="py-2 px-3">Partnerships</td>
                    <td className="py-2 px-3 text-[#c9a227]">15%</td>
                    <td className="py-2 px-3 text-gray-400">BNPL, bank integrations</td>
                  </tr>
                  <tr className="border-b border-[#2a3a52]/50">
                    <td className="py-2 px-3">Growth Experiments</td>
                    <td className="py-2 px-3 text-[#c9a227]">15%</td>
                    <td className="py-2 px-3 text-gray-400">Targeted user acquisition tests</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-3">Legal & Compliance</td>
                    <td className="py-2 px-3 text-[#c9a227]">10%</td>
                    <td className="py-2 px-3 text-gray-400">Regulatory, contracts, IP</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DocItem>

          <DocItem number="14" title="Revenue Model">
            <p className="mb-4">
              Nuqta has multiple revenue streams that activate at different stages of growth.
              The model is designed for capital efficiency — we generate revenue from both sides
              of the marketplace without heavy inventory or logistics costs.
            </p>
            <div className="mt-4">
              <p className="font-semibold text-white mb-2">Primary Revenue Streams</p>
              <p className="text-gray-300 text-sm mb-4">
                Merchant-funded rewards where merchants pay for customer visits and conversions.
                Campaign fees for promoted offers and featured placement. BNPL referral commissions
                for users who select installment options through our recommendations.
              </p>
              <p className="font-semibold text-white mb-2">Unit Economics Advantage</p>
              <p className="text-gray-300 text-sm">
                No inventory, no logistics, minimal infrastructure cost per transaction.
                The intelligence layer scales with marginal cost approaching zero once the
                platform is built. Focus is on repeat behavior — high-frequency transactions
                in daily spending categories.
              </p>
            </div>
          </DocItem>
        </Folder>

        {/* SECTION 5: GOVERNANCE */}
        <Folder icon="⚖️" title="5. Governance" id="governance">
          <DocItem number="15" title="Investor Reporting">
            <p className="mb-4">
              Transparency with investors is non-negotiable. Regular, honest communication about
              progress and challenges builds the trust necessary for long-term partnership.
            </p>
            <div className="mt-4">
              <p className="font-semibold text-white mb-2">Reporting Commitments</p>
              <p className="text-gray-300 text-sm">
                Monthly KPI updates including user metrics, merchant metrics, and key milestones.
                Quarterly financial summaries with runway projections and variance analysis.
                Roadmap progress updates with honest assessment of delays or pivots.
                Proactive communication of risks, blockers, and strategic concerns.
              </p>
            </div>
            </DocItem>

          <DocItem number="16" title="Board Structure">
            <p className="mb-4">
              Governance structure evolves appropriately with company stage. We are not creating
              unnecessary bureaucracy at pre-seed, but establishing foundations for proper oversight.
            </p>
            <div className="mt-4">
              <p className="font-semibold text-white mb-2">Pre-Seed Stage</p>
              <p className="text-gray-300 text-sm mb-4">
                Founder-led with lead investor observer seat. Regular update cadence and
                open communication channels. Advisory input welcomed on strategic decisions.
              </p>
              <p className="font-semibold text-white mb-2">Post-Seed Evolution</p>
              <p className="text-gray-300 text-sm">
                Formal board formation with appropriate investor representation.
                Independent director consideration as company scales.
                Standard governance protocols for material decisions.
              </p>
            </div>
          </DocItem>

          <DocItem number="17" title="Financial Controls">
            <p className="mb-4">
              Proper financial controls are established from day one. Investor capital is treated
              with the same rigor as public company funds — because that discipline is what allows
              small rounds to achieve outsized outcomes.
            </p>
            <div className="mt-4">
              <p className="font-semibold text-white mb-2">Controls in Place</p>
              <p className="text-gray-300 text-sm">
                Corporate bank account only — no personal accounts used for company business.
                Dual signatory requirements for expenditures above defined thresholds.
                Budget-based spending with variance tracking.
                Clear separation of founder personal finances from company operations.
                Audit-ready documentation from inception.
              </p>
            </div>
          </DocItem>
        </Folder>

        {/* Contact */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Questions about any materials?</p>
          <a
            href="mailto:rejaul@nuqtaapp.com?subject=Data%20Room%20Question"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#c9a227] text-[#0a1628] rounded-xl font-bold hover:bg-[#f4d35e] transition-colors"
          >
            Contact Founder
          </a>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex items-center justify-between border-t border-[#2a3a52] pt-8">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors">
            ← Back to Site
          </Link>
          <div className="flex gap-6">
            <Link href="/commitment" className="text-[#c9a227] hover:text-[#f4d35e] transition-colors">
              Founder Commitment
            </Link>
            <Link href="/terms" className="text-[#c9a227] hover:text-[#f4d35e] transition-colors">
              CCD Terms
            </Link>
            <Link href="/memo" className="text-[#c9a227] hover:text-[#f4d35e] transition-colors">
              Memo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
