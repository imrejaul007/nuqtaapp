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

// DataPoint Tooltip Component for statistics with sources
function DataPoint({
  value,
  source,
  className = ''
}: {
  value: string;
  source: string;
  className?: string;
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <span
      className={`relative cursor-help inline-flex items-start gap-0.5 ${className}`}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onTouchStart={() => setShowTooltip(true)}
      onTouchEnd={() => setTimeout(() => setShowTooltip(false), 3000)}
    >
      <span>{value}</span>
      <span className="text-[0.5em] text-[#c9a227]/70 hover:text-[#c9a227] transition-colors">ⓘ</span>
      {showTooltip && (
        <span className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#0a1628] border border-[#c9a227]/50 rounded-lg text-xs sm:text-sm text-gray-300 whitespace-normal max-w-[200px] sm:max-w-[280px] text-center shadow-xl font-normal">
          <span className="text-[#c9a227] font-medium">Source:</span> {source}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#c9a227]/50" />
        </span>
      )}
    </span>
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
              { icon: '📈', label: 'Unit Economics', href: '#unit-economics' },
              { icon: '💰', label: 'Financials', href: '#financials' },
              { icon: '⚖️', label: 'Governance', href: '#governance' },
              { icon: '❓', label: 'FAQ', href: '#faq' },
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
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-[#1a2a42] rounded-lg p-3 sm:p-4 border-l-4 border-blue-500">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-1 sm:gap-2">
                  <p className="font-bold text-blue-400 text-sm sm:text-base">Phase 1: Foundation (Months 1-6)</p>
                  <Status status="in-progress" />
                </div>
                <p className="text-gray-300 mb-3">
                  Core MVP development focused on payment intelligence using a rules-based recommendation engine.
                  Universal Nuqta points system with visit-based loyalty mechanics. QR-code based earning flow
                  requiring no hardware integration. Basic merchant dashboard for campaign management.
                  Initial launch limited to Dubai in select high-frequency categories.
                </p>
                <p className="text-gray-300 mb-3">
                  <strong className="text-[#c9a227]">Phase 1 (MVP) launching March 1, 2026.</strong> Year 1 targets: 100K MAU, 2,500 merchants, 30% D30 retention.
                </p>
                <p className="text-[#c9a227] text-sm"><strong>Success metric:</strong> Validated repeat usage patterns and measurable merchant ROI</p>
              </div>

              <div className="bg-[#1a2a42] rounded-lg p-3 sm:p-4 border-l-4 border-yellow-500">
                <p className="font-bold text-yellow-400 mb-2 text-sm sm:text-base">Phase 2: Expansion (Months 6-12)</p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Scale merchant network to 500+ locations. Expand into grocery and daily essentials categories.
                  Deepen BNPL provider integrations with direct API connections. Introduce loyalty tiers and
                  streak-based engagement mechanics. Enhance recommendation engine with behavioral signals.
                </p>
              </div>

              <div className="bg-[#1a2a42] rounded-lg p-3 sm:p-4 border-l-4 border-green-500">
                <p className="font-bold text-green-400 mb-2 text-sm sm:text-base">Phase 3: Platform Maturity (Months 12-24)</p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Multi-city expansion across UAE and initial GCC markets. Bank partnership integrations
                  for deeper card intelligence. Advanced ML-powered payment recommendations. Enterprise
                  merchant tools and analytics platform.
                </p>
              </div>
            </div>
          </DocItem>

          <DocItem number="6" title="MVP Definition">
            <p className="mb-3 sm:mb-4 text-xs sm:text-sm">
              The MVP is intentionally constrained to validate core hypotheses before investing in complexity.
              We are building just enough to prove that users will repeatedly engage with payment recommendations
              and that merchants will pay for customer loyalty tools.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div className="bg-green-500/10 rounded-lg p-3 sm:p-4 border border-green-500/30">
                <p className="font-bold text-green-400 mb-2 sm:mb-3 text-sm sm:text-base">Included in MVP</p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Payment recommendation engine (rules-based), universal rewards wallet, visit-based
                  loyalty tracking, merchant QR tools, and manual offer curation system.
                </p>
              </div>
              <div className="bg-red-500/10 rounded-lg p-3 sm:p-4 border border-red-500/30">
                <p className="font-bold text-red-400 mb-2 sm:mb-3 text-sm sm:text-base">Excluded from MVP</p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Deep POS integrations, advanced ML models, direct bank API connections,
                  and cross-border rewards functionality.
                </p>
              </div>
            </div>
            </DocItem>

          <DocItem number="7" title="Technical Architecture">
            <p className="mb-3 sm:mb-4 text-xs sm:text-sm">
              The technical architecture prioritizes security, scalability, and compliance while remaining
              lean enough for a pre-seed stage company. We are not over-engineering for hypothetical scale.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
              <div>
                <p className="font-semibold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Frontend</p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Native mobile applications for iOS and Android with a responsive web dashboard for merchants.
                  Clean, performant UI prioritizing transaction speed and minimal friction.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Backend</p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Cloud-based microservices architecture with a dedicated rules engine for recommendations.
                  Event-driven transaction processing with comprehensive audit logging.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Data Handling</p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  No card numbers stored. Tokenized user identifiers with minimal PII collection.
                  Privacy-first design that complies with regional data protection requirements.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Security</p>
                <p className="text-gray-300 text-xs sm:text-sm">
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
            <p className="mb-3 sm:mb-4 text-xs sm:text-sm">
              Our market analysis focuses on realistic capture rather than inflated TAM figures.
              We are building for the GCC, starting with UAE, and our assumptions reflect actual
              payment volumes and merchant economics.
            </p>
            <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
              <div className="bg-[#1a2a42] rounded-lg p-3 sm:p-4">
                <p className="font-bold text-[#c9a227] mb-1.5 sm:mb-2 text-sm sm:text-base">Total Addressable Market (GCC)</p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  GCC consumer spending exceeds <DataPoint value="$600B" source="IMF GCC Economic Outlook, World Bank regional data" className="text-gray-300" /> annually across high card penetration markets.
                  Our infrastructure layer can theoretically touch all digital transactions that involve
                  payment decisions or loyalty mechanics.
                </p>
              </div>
              <div className="bg-[#1a2a42] rounded-lg p-3 sm:p-4">
                <p className="font-bold text-[#c9a227] mb-1.5 sm:mb-2 text-sm sm:text-base">Serviceable Addressable Market (UAE + KSA)</p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Approximately <DataPoint value="5M" source="Central Bank of UAE, banking penetration data" className="text-gray-300" /> active digital consumers in UAE and urban KSA represent <DataPoint value="$40-50B" source="Central Bank of UAE, Visa & Mastercard regional reports" className="text-gray-300" />{' '}
                  in addressable transaction volume. These are users who actively use multiple payment
                  methods and are receptive to optimization tools.
                </p>
              </div>
              <div className="bg-[#1a2a42] rounded-lg p-3 sm:p-4">
                <p className="font-bold text-[#c9a227] mb-1.5 sm:mb-2 text-sm sm:text-base">Serviceable Obtainable Market (Initial Target)</p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  High-frequency daily categories in Dubai: cafes, grocery, salons, pharmacies, and clinics.
                  These verticals have repeat purchase behavior that rewards loyalty investment and supports
                  our city-by-city expansion strategy.
                </p>
              </div>
            </div>
          </DocItem>

          <DocItem number="9" title="Go-to-Market Strategy">
            <p className="mb-3 sm:mb-4 text-xs sm:text-sm">
              Our GTM strategy prioritizes depth over breadth. We are not attempting to boil the ocean
              with a nationwide launch. Instead, we focus on concentrated geographic and vertical expansion
              that builds genuine network effects.
            </p>
            <div className="space-y-3 sm:space-y-4 mt-3 sm:mt-4">
              <div>
                <p className="font-semibold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Phase 1: Merchant-Led Acquisition</p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  On-counter QR codes drive organic user acquisition. Staff-assisted onboarding reduces
                  friction. Loyal customers become natural referral sources. This approach inverts typical
                  consumer app acquisition costs.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Phase 2: Habit Formation</p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  The Smart Pay Advisor creates the engagement hook — users open the app to check payment
                  recommendations before purchasing. Monthly savings summaries and streak rewards reinforce
                  habitual usage patterns.
                </p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Phase 3: Partnership Leverage</p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  BNPL referral partnerships expand reach without acquisition cost. Fintech co-marketing
                  agreements access established user bases. Local ecosystem partnerships provide distribution
                  leverage.
                </p>
              </div>
            </div>
          </DocItem>

          <DocItem number="10" title="Merchant Strategy & LOIs">
            <p className="mb-4">
              32 signed merchant LOIs with 30 more in pipeline (60+ merchant network) across Dubai Marina, Downtown, and JBR.
              Merchant categories: cafes, salons, gyms, retail attacking a $45B GCC market (SAM).
              Target: 50-100 merchants by Month 3.
            </p>
            <div className="mt-4">
              <p className="font-semibold text-white mb-2">Merchant Onboarding Approach</p>
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

        {/* SECTION 4: UNIT ECONOMICS */}
        <Folder icon="📈" title="4. Unit Economics" id="unit-economics">
          <DocItem number="11" title="LTV & CAC Breakdown">
            <p className="mb-3 sm:mb-4 text-xs sm:text-sm">
              Customer acquisition cost (AED 30) vs lifetime value (AED 504) across channels.
              Includes payback period calculation (&lt;1 month) and cohort retention assumptions.
            </p>
            <div className="bg-[#1a2a42] rounded-lg p-3 sm:p-4 mt-3 sm:mt-4">
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#c9a227]">AED 30</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">Blended CAC</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#c9a227]">AED 504</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">Lifetime Value</p>
                </div>
                <div>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#c9a227]">&lt;1 Month</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">Payback Period</p>
                </div>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm">
                LTV calculation based on 24-month customer lifetime, 8 transactions/month average frequency,
                and blended take rate across merchant commissions and BNPL referrals. Cohort retention
                assumptions factor in 65% Month 3 retention declining to 30% Month 12 retention.
              </p>
            </div>
          </DocItem>

          <DocItem number="12" title="Channel-Specific Economics">
            <p className="mb-3 sm:mb-4 text-xs sm:text-sm">
              CAC by channel: Merchant QR (AED 10-15), Student Ambassadors (AED 25-30), Digital (AED 60-80).
              16.8x blended LTV:CAC ratio.
            </p>
            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 my-3 sm:my-4">
              <table className="w-full text-xs sm:text-sm min-w-[400px]">
                <thead>
                  <tr className="border-b border-[#2a3a52]">
                    <th className="text-left py-2 px-2 sm:px-3 text-gray-400 font-medium">Channel</th>
                    <th className="text-left py-2 px-2 sm:px-3 text-gray-400 font-medium">CAC Range</th>
                    <th className="text-left py-2 px-2 sm:px-3 text-gray-400 font-medium">LTV:CAC Ratio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#2a3a52]/50">
                    <td className="py-2 px-2 sm:px-3">Merchant QR</td>
                    <td className="py-2 px-2 sm:px-3 text-[#c9a227]">AED 10-15</td>
                    <td className="py-2 px-2 sm:px-3 text-green-400">33.6x - 50.4x</td>
                  </tr>
                  <tr className="border-b border-[#2a3a52]/50">
                    <td className="py-2 px-2 sm:px-3">Student Ambassadors</td>
                    <td className="py-2 px-2 sm:px-3 text-[#c9a227]">AED 25-30</td>
                    <td className="py-2 px-2 sm:px-3 text-green-400">16.8x - 20.2x</td>
                  </tr>
                  <tr className="border-b border-[#2a3a52]/50">
                    <td className="py-2 px-2 sm:px-3">Digital Acquisition</td>
                    <td className="py-2 px-2 sm:px-3 text-[#c9a227]">AED 60-80</td>
                    <td className="py-2 px-2 sm:px-3 text-yellow-400">6.3x - 8.4x</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-300 text-xs sm:text-sm">
              Blended LTV:CAC ratio of 16.8x (AED 504 LTV ÷ AED 30 CAC) assumes 70% merchant QR acquisition,
              30% student ambassadors during early growth phase. This mix heavily favors low-cost organic
              acquisition before scaling paid channels.
            </p>
          </DocItem>

          <DocItem number="13" title="Float Dynamics Model">
            <p className="mb-4">
              Operational float projections based on 30-45 day redemption lag. Cash flow benefits and
              future interest revenue opportunity post-SVF license.
            </p>
            <div className="bg-[#1a2a42] rounded-lg p-4 mt-4">
              <p className="font-semibold text-white mb-2">Float Mechanics</p>
              <p className="text-gray-300 text-sm mb-4">
                When users earn Nuqta points through merchant visits, those points sit in user wallets for
                an average of 30-45 days before redemption. This creates operational float — capital that
                can be deployed for working capital management or future yield generation.
              </p>
              <p className="font-semibold text-white mb-2">Cash Flow Advantage</p>
              <p className="text-gray-300 text-sm mb-4">
                Float provides natural working capital buffer, reducing need for external financing to fund
                merchant payouts. At scale, this becomes a meaningful financial asset.
              </p>
              <p className="font-semibold text-white mb-2">Future Opportunity (Post-SVF License)</p>
              <p className="text-gray-300 text-sm">
                With a Stored Value Facility license, float can generate interest revenue through treasury
                management. Conservative 3-4% yield on AED 10M float = AED 300-400K annual revenue opportunity
                at mature scale.
              </p>
            </div>
          </DocItem>

          <DocItem number="14" title="Market Opportunity & Revenue Model">
            <p className="mb-3 sm:mb-4 text-xs sm:text-sm">
              60+ merchant network (32 signed LOIs, 30 in pipeline) attacking a $45B GCC market.
              Commission rate: 15% on completed transactions.
            </p>
            <div className="bg-[#1a2a42] rounded-lg p-3 sm:p-4 mt-3 sm:mt-4">
              <p className="font-semibold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Market Sizing (TAM/SAM/SOM)</p>
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4">
                <div>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-[#c9a227]">$150B</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">TAM (GCC Total Market)</p>
                </div>
                <div>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-[#c9a227]">$45B</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">SAM (GCC Market)</p>
                </div>
                <div>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-[#c9a227]">$1.35B</p>
                  <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm">SOM (Dubai 3yr Target)</p>
                </div>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4">
                At 15% commission rate on transactions, merchants pay only for verified completed sales.
                Performance-based pricing model means merchants pay AED 10-15 CAC vs AED 200+ on Google Ads.
                Average merchant ROI exceeds 3-4x based on repeat purchase lift and reduced customer acquisition costs.
              </p>
              <p className="font-semibold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">Revenue Scaling Path</p>
              <p className="text-gray-300 text-xs sm:text-sm">
                Month 1-3: 30 merchants activated, conservative GMV ramp-up. Month 4-6: 60+ merchants activated
                as pipeline converts. 1% market penetration at maturity = AED 1.8B GMV opportunity × 8% = AED 144M annual revenue potential (Year 3 target).
              </p>
            </div>
          </DocItem>
        </Folder>

        {/* SECTION 5: FINANCIALS */}
        <Folder icon="💰" title="5. Financials" id="financials">
          <DocItem number="15" title="Runway & Milestones">
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

          <DocItem number="16" title="Burn Rate">
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

          <DocItem number="17" title="Use of Funds">
            <p className="mb-3 sm:mb-4 text-xs sm:text-sm">
              Capital allocation reflects our stage-appropriate priorities. The majority goes to
              product development and merchant operations — the two areas that directly prove our
              core hypotheses.
            </p>
            <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0 my-3 sm:my-4">
              <table className="w-full text-xs sm:text-sm min-w-[400px]">
                <thead>
                  <tr className="border-b border-[#2a3a52]">
                    <th className="text-left py-2 px-2 sm:px-3 text-gray-400 font-medium">Category</th>
                    <th className="text-left py-2 px-2 sm:px-3 text-gray-400 font-medium">Allocation</th>
                    <th className="text-left py-2 px-2 sm:px-3 text-gray-400 font-medium">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#2a3a52]/50">
                    <td className="py-2 px-2 sm:px-3">Product & Engineering</td>
                    <td className="py-2 px-2 sm:px-3 text-[#c9a227]">35%</td>
                    <td className="py-2 px-2 sm:px-3 text-gray-400">MVP development, iteration</td>
                  </tr>
                  <tr className="border-b border-[#2a3a52]/50">
                    <td className="py-2 px-2 sm:px-3">Merchant Operations</td>
                    <td className="py-2 px-2 sm:px-3 text-[#c9a227]">25%</td>
                    <td className="py-2 px-2 sm:px-3 text-gray-400">Onboarding, support, success</td>
                  </tr>
                  <tr className="border-b border-[#2a3a52]/50">
                    <td className="py-2 px-2 sm:px-3">Partnerships</td>
                    <td className="py-2 px-2 sm:px-3 text-[#c9a227]">15%</td>
                    <td className="py-2 px-2 sm:px-3 text-gray-400">BNPL, bank integrations</td>
                  </tr>
                  <tr className="border-b border-[#2a3a52]/50">
                    <td className="py-2 px-2 sm:px-3">Growth Experiments</td>
                    <td className="py-2 px-2 sm:px-3 text-[#c9a227]">15%</td>
                    <td className="py-2 px-2 sm:px-3 text-gray-400">Targeted user acquisition tests</td>
                  </tr>
                  <tr>
                    <td className="py-2 px-2 sm:px-3">Legal & Compliance</td>
                    <td className="py-2 px-2 sm:px-3 text-[#c9a227]">10%</td>
                    <td className="py-2 px-2 sm:px-3 text-gray-400">Regulatory, contracts, IP</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </DocItem>

          <DocItem number="18" title="Revenue Model">
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

        {/* SECTION 6: GOVERNANCE */}
        <Folder icon="⚖️" title="6. Governance" id="governance">
          <DocItem number="19" title="Investor Reporting">
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

          <DocItem number="20" title="Board Structure">
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

          <DocItem number="21" title="Financial Controls">
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

          <DocItem number="22" title="Organization Structure">
            <p className="mb-4">
              Nuqta has a well-defined organizational structure with clear reporting lines,
              sub-teams under each C-Suite executive, and defined responsibilities for all roles.
            </p>
            <div className="mt-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                <div className="bg-amber-500/10 rounded-lg p-3 border border-amber-500/30 text-center">
                  <p className="text-lg font-bold text-amber-400">6</p>
                  <p className="text-xs text-gray-400">C-Suite Roles</p>
                </div>
                <div className="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/30 text-center">
                  <p className="text-lg font-bold text-emerald-400">20+</p>
                  <p className="text-xs text-gray-400">Sub-Teams</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-3 border border-blue-500/30 text-center">
                  <p className="text-lg font-bold text-blue-400">80+</p>
                  <p className="text-xs text-gray-400">Total Roles (H3)</p>
                </div>
              </div>
              <p className="font-semibold text-white mb-2">Department Structure</p>
              <p className="text-gray-300 text-sm mb-4">
                CEO (Strategy & Executive Office) → CTO (Product, Engineering, Design, Data) →
                COO (Merchant Success, Support, Operations, Legal) → CMO (Growth, Content, Creative, Performance, PR) →
                CHRO (Talent, People Ops, L&D, Culture) → CFO (Finance, Treasury, FP&A)
              </p>
              <Link href="/company-structure" className="inline-flex items-center gap-2 px-4 py-2 bg-[#c9a227]/20 border border-[#c9a227]/40 rounded-lg text-[#c9a227] hover:bg-[#c9a227]/30 transition-colors text-sm">
                View Full Company Structure →
              </Link>
            </div>
          </DocItem>
        </Folder>

        {/* SECTION 7: INVESTOR FAQ */}
        <Folder icon="❓" title="7. Investor FAQ" id="faq">
          <DocItem number="25" title="What is the funding structure?">
            <div className="space-y-4">
              <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/30">
                <p className="font-bold text-emerald-400 mb-2">Tranched SAFE Structure</p>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li><strong>Total Ask:</strong> $400K at $5M valuation cap (SAFE with 20% discount)</li>
                  <li><strong>Tranche 1:</strong> $200K (AED 734K) - Immediately upon closing</li>
                  <li><strong>Tranche 2:</strong> $200K (AED 734K) - Upon milestones: 500 live merchants, 25,000 MAU, CTO hired</li>
                </ul>
              </div>
              <p className="text-gray-300 text-sm">
                This structure protects investor capital while allowing the company to prove execution capability before receiving full funding.
              </p>
            </div>
          </DocItem>

          <DocItem number="26" title="Why solo founder? What about co-founder risk?">
            <div className="space-y-4">
              <p className="text-gray-300">
                The founder acknowledges that solo founder status is a key risk factor (65% higher failure rate vs co-founder teams).
                This is addressed through a mandatory co-founder commitment:
              </p>
              <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/30">
                <p className="font-bold text-blue-400 mb-2">Co-Founder Hiring Plan</p>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li><strong>Timeline:</strong> CTO/Co-founder hire within 90 days of funding</li>
                  <li><strong>Equity:</strong> 15-25% equity allocation reserved</li>
                  <li><strong>Profile:</strong> Technical co-founder with fintech/payments experience</li>
                  <li><strong>Milestone:</strong> Part of Tranche 2 release conditions</li>
                </ul>
              </div>
              <p className="text-gray-300 text-sm">
                Active outreach is underway. The founder has connections in UAE fintech ecosystem and is working with angel networks to identify candidates.
              </p>
            </div>
          </DocItem>

          <DocItem number="27" title="What are the H1 targets and how were they set?">
            <div className="space-y-4">
              <div className="bg-[#c9a227]/10 rounded-lg p-4 border border-[#c9a227]/30">
                <p className="font-bold text-[#c9a227] mb-2">Aggressive H1 Targets (6 months)</p>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li><strong>MAU:</strong> 50,000 users (H1 target - matching Tabby UAE trajectory)</li>
                  <li><strong>Merchants:</strong> 1,500 (H1 target - validated through 32 LOIs already secured)</li>
                  <li><strong>Retention:</strong> 30% D30 retention (above industry standard for rewards apps)</li>
                  <li><strong>LTV:CAC:</strong> 16.8x ratio (excellent for consumer fintech)</li>
                </ul>
              </div>
              <p className="text-gray-300 text-sm">
                Targets are aggressive to match domination strategy. Tabby UAE achieved 100K-200K users in 6 months. Our 50K target is 25-50% of their pace.
              </p>
            </div>
          </DocItem>

          <DocItem number="28" title="How will funds be allocated?">
            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <div className="bg-emerald-500/10 rounded-lg p-2 sm:p-4 border border-emerald-500/30 text-center">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-emerald-400">55%</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">Marketing</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">User & Merchant Acquisition</p>
                </div>
                <div className="bg-yellow-500/10 rounded-lg p-2 sm:p-4 border border-yellow-500/30 text-center">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400">25%</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">Salaries</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">Founder, Co-founder, Key Hires</p>
                </div>
                <div className="bg-blue-500/10 rounded-lg p-2 sm:p-4 border border-blue-500/30 text-center">
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-400">20%</p>
                  <p className="text-[10px] sm:text-xs text-gray-400">Tech & Ops</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 hidden sm:block">Infrastructure, Operations</p>
                </div>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm">
                Budget allocation is flexible and adjusts based on actual funding received. Marketing-heavy allocation reflects growth-stage priorities.
              </p>
            </div>
          </DocItem>

          <DocItem number="29" title="What is the regulatory path for SVF license?">
            <div className="space-y-4">
              <p className="text-gray-300">
                The Stored Value Facility (SVF) license is required for float interest revenue (approximately 10% of the financial model).
              </p>
              <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/30">
                <p className="font-bold text-purple-400 mb-2">SVF License Strategy</p>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li><strong>Timeline:</strong> 12-18 months for approval</li>
                  <li><strong>Cost:</strong> AED 50-70K + legal fees</li>
                  <li><strong>Capital:</strong> AED 5M minimum paid-up capital required</li>
                  <li><strong>Fallback:</strong> If denied, model pivots to pure cashback (no stored value)</li>
                </ul>
              </div>
              <p className="text-gray-300 text-sm">
                Pre-application consultation with CBUAE planned within 6 months of funding. Model is viable without SVF revenue.
              </p>
            </div>
          </DocItem>

          <DocItem number="30" title="What are the key risks and mitigations?">
            <div className="space-y-3 sm:space-y-4">
              <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
                <table className="w-full text-xs sm:text-sm min-w-[400px]">
                  <thead className="text-left text-gray-400 border-b border-[#2a3a52]">
                    <tr>
                      <th className="pb-2 pr-2">Risk</th>
                      <th className="pb-2 pr-2">Impact</th>
                      <th className="pb-2">Mitigation</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-[#2a3a52]/50">
                      <td className="py-2 pr-2">Solo founder</td>
                      <td className="py-2 pr-2 text-red-400">High</td>
                      <td className="py-2">90-day co-founder hire commitment</td>
                    </tr>
                    <tr className="border-b border-[#2a3a52]/50">
                      <td className="py-2 pr-2">Careem copies model</td>
                      <td className="py-2 pr-2 text-yellow-400">Medium</td>
                      <td className="py-2">12-18 month head start, POS moat</td>
                    </tr>
                    <tr className="border-b border-[#2a3a52]/50">
                      <td className="py-2 pr-2">Series A market closes</td>
                      <td className="py-2 pr-2 text-red-400">High</td>
                      <td className="py-2">Conservative burn, path to profitability</td>
                    </tr>
                    <tr className="border-b border-[#2a3a52]/50">
                      <td className="py-2 pr-2">SVF license denied</td>
                      <td className="py-2 pr-2 text-yellow-400">Medium</td>
                      <td className="py-2">Model viable without float revenue</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-2">Merchant churn &gt;20%</td>
                      <td className="py-2 pr-2 text-yellow-400">Medium</td>
                      <td className="py-2">POS integration creates switching cost</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </DocItem>

          <DocItem number="31" title="What is the expected return profile?">
            <div className="space-y-3 sm:space-y-4">
              <div className="grid grid-cols-2 gap-2 sm:gap-4">
                <div className="bg-[#1a2a42] rounded-lg p-3 sm:p-4 border border-[#2a3a52]">
                  <p className="text-[10px] sm:text-xs text-gray-400 mb-0.5 sm:mb-1">Base Case (35% probability)</p>
                  <p className="text-xl sm:text-2xl font-bold text-emerald-400">120x</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">$1.2B exit → $48M return</p>
                </div>
                <div className="bg-[#1a2a42] rounded-lg p-3 sm:p-4 border border-[#2a3a52]">
                  <p className="text-[10px] sm:text-xs text-gray-400 mb-0.5 sm:mb-1">Conservative (15% probability)</p>
                  <p className="text-xl sm:text-2xl font-bold text-blue-400">95x</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">$950M exit → $38M return</p>
                </div>
              </div>
              <div className="bg-red-500/10 rounded-lg p-3 sm:p-4 border border-red-500/30">
                <p className="font-bold text-red-400 mb-1.5 sm:mb-2 text-sm sm:text-base">Failure Scenario (40% probability)</p>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Total loss of investment. Pre-seed venture investing carries significant risk.
                  Only invest capital you can afford to lose entirely.
                </p>
              </div>
              <p className="text-gray-300 text-xs sm:text-sm">
                <strong>Expected Value:</strong> ~$25M (62x blended return). Even at 50% of projections, returns remain attractive (47-71x).
              </p>
            </div>
          </DocItem>

          <DocItem number="32" title="What happens if projections are missed?">
            <div className="space-y-4">
              <p className="text-gray-300">
                The financial model has been stress-tested with significant haircuts:
              </p>
              <div className="bg-[#1a2a42] rounded-lg p-4 border border-[#2a3a52]">
                <p className="font-bold text-white mb-3">50% Miss Scenario</p>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>Year 5 Revenue: AED 240M (vs AED 480M target)</li>
                  <li>Exit Valuation: $400-600M (8-12x multiple)</li>
                  <li>Investor Return: <strong className="text-emerald-400">40-60x</strong></li>
                </ul>
                <p className="text-[#c9a227] text-sm mt-3">
                  Still top-decile venture returns even with 50% execution miss.
                </p>
              </div>
            </div>
          </DocItem>
        </Folder>

        {/* Contact */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">Questions about any materials?</p>
          <a
            href="mailto:rejaul@nuqtapp.com?subject=Data%20Room%20Question"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-[#c9a227] text-[#0a1628] rounded-lg sm:rounded-xl font-bold hover:bg-[#f4d35e] transition-colors text-sm sm:text-base"
          >
            Contact Founder
          </a>
        </div>

        {/* Navigation */}
        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between border-t border-[#2a3a52] pt-6 sm:pt-8 gap-4">
          <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
            ← Back to Site
          </Link>
          <div className="flex flex-wrap gap-3 sm:gap-6">
            <Link href="/company-profile" className="text-[#c9a227] hover:text-[#f4d35e] transition-colors text-sm sm:text-base">
              Company Profile
            </Link>
            <Link href="/ecosystem-docs" className="text-[#c9a227] hover:text-[#f4d35e] transition-colors text-sm sm:text-base">
              Ecosystem Docs
            </Link>
            <Link href="/commitment" className="text-[#c9a227] hover:text-[#f4d35e] transition-colors text-sm sm:text-base">
              Founder Commitment
            </Link>
            <Link href="/terms" className="text-[#c9a227] hover:text-[#f4d35e] transition-colors text-sm sm:text-base">
              CCD Terms
            </Link>
            <Link href="/memo" className="text-[#c9a227] hover:text-[#f4d35e] transition-colors text-sm sm:text-base">
              Memo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
