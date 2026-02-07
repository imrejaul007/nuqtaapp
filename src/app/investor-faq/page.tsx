'use client';

import React, { useState } from 'react';
import GlobalFooter from '@/components/GlobalFooter';
import {
  HelpCircle,
  DollarSign,
  TrendingUp,
  Users,
  Shield,
  Target,
  Building2,
  ChevronDown,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  links?: { label: string; href: string }[];
}

interface FAQCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  questions: FAQItem[];
}

export default function InvestorFAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const faqCategories: FAQCategory[] = [
    {
      title: 'Investment Terms',
      icon: DollarSign,
      color: 'emerald',
      questions: [
        {
          question: 'What are the investment terms?',
          answer: 'We are raising $400K at a $5M post-money valuation cap via SAFE (Simple Agreement for Future Equity). The investment is tranched: $200K at signing, $200K upon hitting milestones (500 merchants, 25K MAU, CTO hired).',
          links: [{ label: 'View Full Terms', href: '/commitment' }]
        },
        {
          question: 'Why a SAFE instead of priced equity?',
          answer: 'At pre-seed, SAFEs are industry standard because: 1) Faster execution - no lengthy negotiation on valuation, 2) Deferred pricing - true valuation determined at Series A with more data, 3) Investor protection - you get the benefit of any down-round protection, 4) Lower legal costs - simple document, less lawyer time.',
        },
        {
          question: 'What is the minimum investment?',
          answer: 'Our minimum check size is $25K. We are primarily targeting angel investors who can add strategic value beyond capital - particularly those with UAE retail/hospitality connections, fintech experience, or consumer app expertise.',
        },
        {
          question: 'What triggers the second tranche?',
          answer: 'Tranche 2 ($200K) is released when we hit ALL of: 1) 10 signed merchants live on platform, 2) 1,000 Monthly Active Users, 3) CTO hired (or equivalent technical leadership). We expect to hit these within 60-90 days of launch.',
          links: [{ label: 'View Milestones', href: '/execution-plan' }]
        },
        {
          question: 'What happens if you don\'t hit milestones?',
          answer: 'If we don\'t hit Tranche 2 milestones within 6 months: 1) We extend the timeline by 90 days, 2) If still not hit, investors have the option (not obligation) to convert Tranche 1 at a 20% discount to the original cap, 3) This protects investors while giving us runway flexibility.',
        },
        {
          question: 'Are there any pro-rata rights?',
          answer: 'Yes. All investors in this round receive pro-rata rights to maintain their ownership percentage in future rounds, up to and including Series A. This is standard investor protection.',
        },
      ]
    },
    {
      title: 'Business Model',
      icon: TrendingUp,
      color: 'blue',
      questions: [
        {
          question: 'How does Nuqta make money?',
          answer: 'We earn commission on every transaction processed through our platform. Engine A merchants (cafes, salons, boutiques) pay 15-20% commission. Engine B merchants (supermarkets, electronics) pay 5-8%. Engine C (events) operates on custom partnership deals. We also have future revenue streams: merchant subscriptions, advertising, data insights, and B2B white-label licensing.',
          links: [{ label: 'View All Engines', href: '/merchant-engines' }]
        },
        {
          question: 'What are your unit economics?',
          answer: 'Target metrics at scale: Customer Acquisition Cost (CAC): AED 25-30 blended, Lifetime Value (LTV): AED 504, LTV:CAC ratio: 16.8x. Per transaction: Average transaction AED 75, Commission 15% = AED 11.25 revenue, User reward cost AED 3, Net margin per transaction: AED 8.25 (73%).',
          links: [{ label: 'Full Financial Model', href: '/financialprojection' }]
        },
        {
          question: 'Why would merchants pay 15-20% commission?',
          answer: 'Because it\'s incremental revenue with zero upfront risk. Merchants only pay when we bring them actual paying customers. Compare to: 1) Google/Meta ads: Pay upfront, hope for results, 2) Traditional loyalty: Monthly fees regardless of performance, 3) Aggregators: Pay per order + listing fees. We align incentives - we only win when they win.',
        },
        {
          question: 'What\'s your competitive moat?',
          answer: 'Three-layer moat: 1) Network effects - more merchants = more user value = more merchants (flywheel), 2) Data moat - transaction data enables personalization competitors can\'t match, 3) Habit formation - daily savings behavior becomes sticky once established. First-mover advantage in UAE rewards aggregation.',
        },
        {
          question: 'How is this different from Entertainer/Groupon?',
          answer: 'Entertainer: One-time discounts, no repeat behavior, cannibalizes full-price customers. Groupon: Race to the bottom on pricing, attracts deal seekers not loyal customers. Nuqta: Rewards on normal purchases, builds repeat behavior, full price revenue for merchants with commission on incremental sales only. We\'re closer to Rakuten/Honey than Entertainer.',
        },
      ]
    },
    {
      title: 'Market & Traction',
      icon: Target,
      color: 'purple',
      questions: [
        {
          question: 'Why UAE? Why now?',
          answer: 'UAE is the perfect launch market: 1) 85% smartphone penetration, 2) High consumer spending (AED 1,200/month discretionary), 3) Diverse expat population seeking local deals, 4) No dominant rewards aggregator (market gap), 5) Merchant digitization push post-COVID. Timing: economic diversification creating merchant pressure to acquire customers digitally.',
          links: [{ label: 'Market Analysis', href: '/deck-kang' }]
        },
        {
          question: 'What traction do you have?',
          answer: 'Pre-launch traction: 1) LOIs from 32 merchants across F&B, beauty, retail, 2) Partnership discussions with Global Village (3M visitors/season), 3) Fully functional MVP (100% complete), 4) 500+ pre-launch waitlist signups. Launch target: March 1, 2026.',
        },
        {
          question: 'What\'s your TAM/SAM/SOM?',
          answer: 'TAM (UAE retail market): $60B annually. SAM (addressable categories): $15B. SOM (Year 3 target): AED 1.8B GMV = AED 144M revenue at 8% blended take rate. Conservative capture of 3.3% of addressable market.',
        },
        {
          question: 'Who are your competitors?',
          answer: 'Direct: Entertainer (subscriptions), Smiles (Etisalat-locked), Amber (food focused). Indirect: Individual merchant loyalty apps. Our advantage: We aggregate across categories and merchants - one app, all rewards. No subscription fee. Commission-only model aligns with merchant interests.',
        },
        {
          question: 'What if a big player copies you?',
          answer: 'Large players have tried and failed (see: Google Offers, Facebook Deals). Why? 1) Local execution matters - merchant relationships are high-touch, 2) Aggregator model requires category expertise they don\'t have, 3) Their ad-based models conflict with commission-based approach. By the time they notice us, we\'ll have network effects they can\'t replicate.',
        },
      ]
    },
    {
      title: 'Team & Execution',
      icon: Users,
      color: 'amber',
      questions: [
        {
          question: 'Who is on the founding team?',
          answer: 'Founder/CEO: [Name] - [X] years in UAE retail/hospitality, built [previous venture]. Deep merchant relationships in Dubai. Currently hiring: CTO (15-25% equity reserved). Advisory: [Names] from [relevant companies]. Full team page available.',
          links: [{ label: 'Meet the Team', href: '/team' }]
        },
        {
          question: 'What\'s your hiring plan?',
          answer: 'Phase 1 (Pre-launch): CTO, 2 developers. Phase 2 (H1): 15 merchant sales reps, 3 ops managers. Phase 3 (H2): Marketing team (5), data analyst (2), customer support (8). Total team by end of Year 1: 70 people. H1 target: 50K MAU, Year 1 target: 100K MAU.',
          links: [{ label: 'CTO Role', href: '/join-us' }]
        },
        {
          question: 'How will you use the funds?',
          answer: 'Allocation of $400K: 1) Product & Tech (40%): CTO hire, developer contractors, infrastructure, 2) Sales & Marketing (35%): Merchant acquisition team, launch marketing, influencer partnerships, 3) Operations (15%): Office, legal, compliance, 4) Buffer (10%): Contingency for opportunities/challenges.',
        },
        {
          question: 'What\'s your runway with this raise?',
          answer: '12-15 months runway to hit Year 1 targets (100K MAU, 2,500 merchants). SAFE round: $400K at $5M valuation cap with 20% discount. Aggressive burn: $50-60K/month with larger team. We reach break-even by Year 1 end at scale.',
        },
        {
          question: 'What keeps you up at night?',
          answer: 'Honest answer: 1) CTO hire - finding the right technical co-founder is critical. 2) Merchant activation - signing merchants is one thing, getting them to actively promote is another. 3) User habit formation - making Nuqta a daily habit vs occasional use. We have mitigation strategies for each, but these are real challenges.',
        },
      ]
    },
    {
      title: 'Legal & Risk',
      icon: Shield,
      color: 'pink',
      questions: [
        {
          question: 'What licenses do you need?',
          answer: 'UAE company formation (freezone or mainland), standard commercial license. NO special financial license required - we\'re a tech platform, not a payment processor. Razorpay handles all payment compliance. Full licensing roadmap available.',
          links: [{ label: 'Licensing Details', href: '/licensing' }]
        },
        {
          question: 'What are the main risks?',
          answer: '1) Execution risk - can we build and scale fast enough? Mitigated by experienced team and lean approach. 2) Market risk - will UAE consumers adopt? Mitigated by proven category (rewards work globally). 3) Competition risk - what if a big player enters? Mitigated by network effects and local execution moat.',
        },
        {
          question: 'How is user data protected?',
          answer: 'Full compliance with UAE Personal Data Protection Law (PDPL). User data encrypted at rest and in transit. No selling of individual data to third parties. Merchants receive only anonymized, aggregated insights. Privacy policy drafted by UAE legal counsel.',
          links: [{ label: 'Terms & Privacy', href: '/terms' }]
        },
        {
          question: 'What\'s your IP strategy?',
          answer: 'Core IP: 1) Proprietary recommendation algorithm (patent pending), 2) Merchant integration APIs, 3) User engagement mechanics (trade secrets). We prioritize execution speed over patent protection at this stage, but key innovations are documented and timestamped.',
        },
        {
          question: 'What happens if the company fails?',
          answer: 'SAFE investors are unsecured creditors - if the company liquidates, you\'re paid after secured creditors but before common shareholders. Realistically, in a failure scenario, recovery is minimal. This is venture risk. We mitigate by: 1) Conservative milestone-based funding, 2) Clear pivoting options if initial approach fails, 3) Acqui-hire potential for team and tech.',
        },
      ]
    },
    {
      title: 'Future & Exit',
      icon: Building2,
      color: 'cyan',
      questions: [
        {
          question: 'What\'s your exit strategy?',
          answer: '3 paths: 1) Strategic acquisition by UAE bank/telecom (most likely - they need customer engagement solutions), 2) Regional acquirer expanding to GCC, 3) IPO (long-term, if we become regional leader). Target exit: Year 4-5 at 10-20x revenue multiple. See master roadmap for timeline.',
          links: [{ label: 'View Roadmap', href: '/master-roadmap' }]
        },
        {
          question: 'What valuation do you expect at Series A?',
          answer: 'Target Series A: AED 15-25M at AED 60-80M valuation (6-8x from seed). Trigger metrics: 100K MAU, 2,500 merchants, AED 120M GMV, 30% D30 retention. Expected timing: 12-18 months post-launch. This implies ~15-20% dilution at Series A.',
        },
        {
          question: 'What\'s your GCC expansion plan?',
          answer: 'Phase 2 (Year 2-3): Saudi Arabia launch - largest GCC market, similar consumer behavior. Phase 3 (Year 3-4): Qatar, Kuwait, Bahrain, Oman. We\'ll franchise/partner for local execution. Same playbook, adapted for local market. UAE success is the proof point.',
        },
        {
          question: 'Who are potential acquirers?',
          answer: 'Strategic buyers: 1) UAE banks (Emirates NBD, FAB, ADCB) - customer engagement, 2) Telecoms (Etisalat, du) - super-app ambitions, 3) Retail conglomerates (Al-Futtaim, Majid Al Futtaim), 4) International players (Rakuten, Honey/PayPal expanding to MENA). We\'re building optionality.',
        },
        {
          question: 'What are the key milestones to watch?',
          answer: 'Next 12 months: 1) Launch (March 1, 2026), 2) 25K MAU + 500 merchants = Tranche 2, 3) 50K MAU + 1,500 merchants = H1 complete, 4) CTO hired, 5) First profitable month, 6) Series A discussions. We\'ll provide monthly investor updates on all metrics.',
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0a1628] via-[#1a2942] to-[#0a1628] border-b border-[#c9a227]/20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-[#c9a227]" />
            <span className="text-[#c9a227] font-semibold">Investor Relations</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Investor FAQ
          </h1>
          <p className="text-xl text-slate-300">
            Common questions from potential investors, answered transparently
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-slate-800/30 border-b border-slate-700/50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-2">
            {faqCategories.map((cat) => (
              <a
                key={cat.title}
                href={`#${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center gap-2 px-3 py-1.5 bg-slate-700/50 rounded-full text-sm text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <cat.icon className="w-4 h-4" />
                {cat.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {faqCategories.map((category) => (
            <div key={category.title} id={category.title.toLowerCase().replace(/\s+/g, '-')}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-${category.color}-500/20 flex items-center justify-center`}>
                  <category.icon className={`w-5 h-5 text-${category.color}-400`} />
                </div>
                <h2 className="text-2xl font-black text-white">{category.title}</h2>
              </div>

              <div className="space-y-3">
                {category.questions.map((faq, index) => {
                  const itemId = `${category.title}-${index}`;
                  const isOpen = openItems.includes(itemId);

                  return (
                    <div
                      key={index}
                      className="bg-slate-800/30 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(itemId)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-800/50 transition-colors"
                      >
                        <span className="font-semibold text-white pr-4">{faq.question}</span>
                        {isOpen ? (
                          <ChevronDown className="w-5 h-5 text-[#c9a227] flex-shrink-0" />
                        ) : (
                          <ChevronRight className="w-5 h-5 text-slate-500 flex-shrink-0" />
                        )}
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-slate-300 whitespace-pre-line">{faq.answer}</p>
                          {faq.links && faq.links.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                              {faq.links.map((link) => (
                                <a
                                  key={link.href}
                                  href={link.href}
                                  className="inline-flex items-center gap-1 text-sm text-[#c9a227] hover:underline"
                                >
                                  {link.label}
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-br from-[#c9a227]/10 to-amber-500/10 border border-[#c9a227]/30 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-black text-white mb-4">More Questions?</h3>
          <p className="text-slate-300 mb-6">
            Schedule a call with our founder to discuss the investment opportunity in detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:invest@nuqtaapp.com?subject=Investment Inquiry"
              className="inline-flex items-center justify-center gap-2 bg-[#c9a227] text-black font-bold px-6 py-3 rounded-full hover:bg-[#d4af37] transition-colors"
            >
              Email Us
            </a>
            <a
              href="/data-room"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#c9a227] text-[#c9a227] font-bold px-6 py-3 rounded-full hover:bg-[#c9a227]/10 transition-colors"
            >
              View Data Room
            </a>
          </div>
        </div>
      </div>

      <GlobalFooter />
    </div>
  );
}
