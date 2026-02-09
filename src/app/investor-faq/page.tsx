'use client';

import React, { useState } from 'react';
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
          answer: 'We are raising $400K Pre-Seed via SAFE with 20% discount and $5M valuation cap. This gives early investors favorable terms when we raise our Series A.',
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
          question: 'Why $5M cap? How did you arrive at this valuation?',
          answer: 'The $5M cap is based on: 1) Team value - 8-person founding team with $50K self-funded, 2) Traction - 32 signed LOIs from merchants, 3) Market opportunity - $15B SAM in UAE rewards, 4) Comparable pre-seed rounds in MENA consumer apps. The 20% discount provides additional investor upside.',
        },
        {
          question: 'What is the 20% discount?',
          answer: 'When we raise our Series A (priced round), your SAFE converts at a 20% discount to whatever price Series A investors pay. Example: If Series A is at $10M valuation, you convert at $8M effective valuation - getting more equity for the same investment.',
        },
        {
          question: 'Are there any pro-rata rights?',
          answer: 'Yes. All investors in this round receive pro-rata rights to maintain their ownership percentage in future rounds, up to and including Series A. This is standard investor protection.',
        },
        {
          question: 'What is the expected return multiple?',
          answer: 'Based on our projections: At Series A ($15-25M valuation), early investors see 3-5x paper return. At exit (target $100-300M in 4-5 years), potential 20-60x return. These are projections, not guarantees - venture investing carries significant risk.',
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
          answer: 'We earn commission on every transaction processed through our platform. Engine A merchants (cafes, salons, boutiques) pay 15-20% commission. Engine B merchants (supermarkets, electronics) pay 5-8%. Engine C (events) operates on custom partnership deals. We also have future revenue streams: Nuqta+ subscriptions (AED 29/month), merchant advertising, data insights, and B2B white-label licensing.',
          links: [{ label: 'View All Engines', href: '/merchant-engines' }]
        },
        {
          question: 'What is the core value proposition?',
          answer: '10% offline cashback on every purchase — 5x better than credit cards. Users discover local merchants, get real cashback (not points), and save money on everyday spending. Merchants get new customers with zero upfront cost, paying only for results.',
        },
        {
          question: 'What are your unit economics?',
          answer: 'Target metrics at scale: Customer Acquisition Cost (CAC): AED 25-30 blended, Lifetime Value (LTV): AED 504, LTV:CAC ratio: 16.8x. Per transaction: Average transaction AED 75, Commission 15% = AED 11.25 revenue, User reward cost AED 3, Net margin per transaction: AED 8.25 (73%).',
          links: [{ label: 'Full Financial Model', href: '/financialprojection' }]
        },
        {
          question: 'Why would merchants pay 15-20% commission?',
          answer: 'Because it\'s incremental revenue with zero upfront risk. Merchants only pay when we bring them actual paying customers. Compare to: 1) Google/Meta ads: Pay upfront, hope for results (+340% CAC increase since 2020), 2) Traditional loyalty: Monthly fees regardless of performance, 3) Aggregators: Pay per order + listing fees. We align incentives - we only win when they win.',
        },
        {
          question: 'What is Nuqta+ membership?',
          answer: 'Nuqta+ is our premium subscription at AED 29/month (AED 199/year). Benefits include: 2x cashback rates, priority merchant access, exclusive deals, no minimum spend requirements, and family sharing. Target: 10-15% of active users convert to Nuqta+.',
          links: [{ label: 'Nuqta+ Details', href: '/nuqta-plus' }]
        },
        {
          question: 'What\'s your competitive moat?',
          answer: 'Four-layer moat: 1) Neutrality - we\'re not owned by a competitor (unlike Smiles/Etisalat), 2) Behavioral data moat - shopping graph that can\'t be scraped or bought, 3) Network effects - more merchants = more users = more data = better recommendations, 4) Merchant alignment - commission-only means we only succeed when they do. Competitors would need 12-18 months to replicate.',
          links: [{ label: 'Competitive Analysis', href: '/competitive-intel' }]
        },
        {
          question: 'How is this different from Entertainer?',
          answer: 'Entertainer: AED 495/year subscription, buy-one-get-one deals, requires planning, one-time use per merchant. Nuqta: Free to use (Nuqta+ optional), 10% cashback on every purchase, works on repeat visits, builds long-term loyalty. We\'re building daily savings habits, not occasional deal-hunting. Closer to Rakuten than Entertainer.',
        },
        {
          question: 'How do you verify transactions?',
          answer: 'Multiple verification methods: 1) QR code scan at merchant checkout, 2) Receipt photo upload with AI verification, 3) POS integration for automated tracking (Phase 2), 4) Card linking for seamless attribution (Phase 3). ML flags suspicious patterns to prevent fraud.',
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
          answer: 'Four converging trends: 1) Search-First Shopping - 67% of UAE shoppers start with search engines, 2) Shop Local Movement - 83% prefer supporting local when convenient, 3) AI Maturity - LLMs make personalized routing affordable at scale, 4) CAC Crisis - +340% digital ad costs since 2020, merchants desperate for alternatives. UAE has 85% smartphone penetration, high spending power, and no dominant rewards aggregator.',
          links: [{ label: 'Market Analysis', href: '/deck-kang' }]
        },
        {
          question: 'What traction do you have?',
          answer: 'Pre-launch traction: 1) 32 signed LOIs from merchants across F&B, beauty, retail, 2) 16.8x projected LTV:CAC ratio, 3) 8-person founding team assembled, 4) $50K self-funded demonstrating founder commitment, 5) 174-page operational playbook ready. Launch target: March 1, 2026.',
        },
        {
          question: 'What are the 32 LOIs worth?',
          answer: 'The LOIs represent merchants across key categories: F&B (cafes, restaurants), Beauty (salons, spas), Retail (boutiques, electronics). Each LOI indicates merchant intent to join at launch with agreed commission rates. Not binding contracts, but strong signals of product-market fit at the merchant level.',
        },
        {
          question: 'What\'s your TAM/SAM/SOM?',
          answer: 'TAM: $175B GCC retail & services market. SAM: $15B UAE addressable categories (F&B, beauty, fashion, fitness, electronics, pharmacy, entertainment). SOM (Year 3): AED 1.8B GMV = AED 144M revenue at 8% blended take rate. Conservative 3.3% market capture.',
          links: [{ label: 'Market Sizing', href: '/deck-kang' }]
        },
        {
          question: 'Who are your competitors?',
          answer: 'Direct: Entertainer (subscription model, AED 495/year), Smiles (telco-locked to Etisalat users), Fazaa (government employee only), Amber (food delivery focused). Indirect: Individual merchant loyalty apps, credit card rewards. Our advantage: Open platform, commission-only, cashback not points, works across all merchants.',
          links: [{ label: 'Competitive Intel', href: '/competitive-intel' }]
        },
        {
          question: 'What if Entertainer drops their price to free?',
          answer: 'Entertainer\'s business model is subscription-based (AED 495/year). Going free would eliminate their entire revenue. Even if they did: 1) They\'re discount-focused (BOGO), not cashback, 2) One-time use per merchant vs. our repeat rewards, 3) No discovery engine, 4) Different value prop entirely. We compete on habit formation, not one-time deals.',
        },
        {
          question: 'What if Careem launches a loyalty program?',
          answer: 'Careem already has Careem Pay and rewards - they\'re a super app. But: 1) They\'re ride/delivery first, loyalty is an afterthought, 2) Their merchants compete with each other (restaurants), 3) They take 30% from merchants - we take 15%, 4) They\'re not neutral (owned by Uber). By the time they focus on this, we\'ll have the behavioral moat.',
        },
        {
          question: 'What if a UAE bank copies you?',
          answer: 'Banks have tried loyalty (Emirates NBD, FAB). Challenges: 1) They\'re card-locked - only works with their cards, 2) Organizational speed - 12-18 months to launch anything, 3) Merchant relationships - they\'re lenders, not partners, 4) Tech stack - legacy systems can\'t do real-time personalization. We\'re more likely to be acquired by a bank than competed with.',
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
          answer: '8-person founding team: CEO (Rejaul Karim) - Ex-CTO & Co-Founder of cybersecurity company, CTO (Deep Tednu Kuri) - 4 years engineering experience, CMO (Sarbajit Bhatacharjee) - Ex Co-Founder of e-commerce app, COO (Gyandeep Bordoloi) - Operations & Execution, CHRO - Ex Co-Founder of EdTech company, plus Designer and BDA. $50K self-funded demonstrates commitment.',
          links: [{ label: 'Meet the Team', href: '/team' }]
        },
        {
          question: 'What is the founder\'s background?',
          answer: 'Rejaul Karim: Ex-CTO & Co-Founder of a cybersecurity company. Technical background with startup experience. Has been building Nuqta for 18+ months, self-funded $50K, assembled 8-person team. Deep understanding of both tech and UAE market dynamics.',
        },
        {
          question: 'Do you have a technical co-founder?',
          answer: 'Yes. Deep Tednu Kuri is our CTO with 4 years of engineering experience. The founding team includes technical, marketing, and operations expertise - not just business people with an idea.',
        },
        {
          question: 'What\'s your hiring plan?',
          answer: 'Phase 1 (Pre-launch): Core team already assembled. Phase 2 (Post-launch): 15 merchant sales reps, 3 ops managers. Phase 3 (H2): Marketing team (5), data analysts (2), customer support (8). Total team by end of Year 1: 70 people. Triggers: 500 live merchants → 25K MAU → scale to 50K MAU.',
          links: [{ label: 'Careers', href: '/careers' }]
        },
        {
          question: 'How will you use the funds?',
          answer: 'Allocation of $400K: 1) Product & Tech (40%): Engineering team expansion, infrastructure, AI/ML development, 2) Sales & Marketing (35%): Merchant acquisition team, launch marketing, influencer partnerships, 3) Operations (15%): Office, legal, compliance, 4) Buffer (10%): Contingency for opportunities/challenges.',
        },
        {
          question: 'What\'s your runway with this raise?',
          answer: '12-15 months runway to hit Year 1 targets (100K MAU, 2,500 merchants). Burn rate: $30-35K/month initially, scaling to $50-60K/month with larger team. Path to break-even by Year 1 end at scale through merchant commissions.',
        },
        {
          question: 'What keeps you up at night?',
          answer: 'Honest answer: 1) Merchant activation - signing merchants is one thing, getting them to actively promote is another. 2) User habit formation - making Nuqta a daily savings habit vs occasional use. 3) Scaling the sales team - finding the right merchant acquisition reps who understand both tech and local market. We have mitigation strategies for each.',
        },
        {
          question: 'Why should we bet on this team?',
          answer: '1) Founder has technical + startup experience (ex-CTO, co-founder), 2) Full team assembled BEFORE raising - rare at pre-seed, 3) $50K self-funded shows skin in the game, 4) 18+ months of preparation with 174 pages of operational playbooks, 5) 32 LOIs secured through founder hustle. This isn\'t a PowerPoint - it\'s a company ready to execute.',
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
          answer: 'UAE company formation (freezone or mainland), standard commercial license. NO special financial license required - we\'re a tech platform, not a payment processor. Payment gateway partners (Stripe/Razorpay) handle all payment compliance. Full licensing roadmap available.',
          links: [{ label: 'Licensing Details', href: '/licensing' }]
        },
        {
          question: 'Do you need a payment license?',
          answer: 'No. We don\'t hold or transfer funds. Users pay merchants directly (cash, card, Apple Pay). We track transactions and distribute cashback through our payment gateway partner. This is similar to how cashback apps like Rakuten or Ibotta operate - no payment license required.',
        },
        {
          question: 'What are the main risks?',
          answer: '1) Execution risk - can we build and scale fast enough? Mitigated by 8-person team already assembled. 2) Market risk - will UAE consumers adopt? Mitigated by proven category (cashback works globally). 3) Competition risk - what if a big player enters? Mitigated by structural moat and 12-18 month head start. 4) Fraud risk - fake transactions? Mitigated by ML-based verification.',
        },
        {
          question: 'How do you prevent fraud?',
          answer: 'Multi-layer fraud prevention: 1) ML flags suspicious patterns (round-number transactions, same location abuse, coordinated timing, velocity spikes), 2) Receipt verification with AI/OCR, 3) Merchant-side confirmation for high-value transactions, 4) User behavior scoring, 5) Geographic verification. Fraud budget: 2% of cashback, target: under 0.5%.',
        },
        {
          question: 'How is user data protected?',
          answer: 'Full compliance with UAE Personal Data Protection Law (PDPL). User data encrypted at rest and in transit. No selling of individual data to third parties. Merchants receive only anonymized, aggregated insights. Privacy policy drafted by UAE legal counsel. GDPR-aligned practices.',
          links: [{ label: 'Terms & Privacy', href: '/terms' }]
        },
        {
          question: 'What\'s your IP strategy?',
          answer: 'Core IP: 1) Proprietary recommendation algorithm, 2) Behavioral shopping graph (can\'t be scraped or bought), 3) Merchant integration APIs, 4) Fraud detection models. We prioritize execution speed and data moat over patent protection at this stage.',
        },
        {
          question: 'What happens if the company fails?',
          answer: 'SAFE investors are unsecured creditors - in liquidation, you\'re paid after secured creditors but before common shareholders. Realistically, in failure, recovery is minimal. This is venture risk. Mitigations: 1) Milestone-based execution, 2) Pivot options (B2B loyalty SaaS, data analytics), 3) Acqui-hire potential for team and tech.',
        },
        {
          question: 'What if you can\'t raise Series A?',
          answer: 'Multiple paths: 1) Extend runway through profitability (target break-even by Year 1), 2) Raise bridge round from existing investors, 3) Pivot to B2B SaaS model (lower burn, faster revenue), 4) Strategic acquisition by UAE bank/retailer. The team and tech have value even if consumer app doesn\'t scale.',
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
          answer: '3 paths: 1) Strategic acquisition by UAE bank/telecom (most likely - they need customer engagement solutions), 2) Regional acquirer expanding to GCC (Careem, Noon, etc.), 3) IPO (long-term, if we become regional leader). Target exit: Year 4-5 at 10-20x revenue multiple.',
          links: [{ label: 'View Roadmap', href: '/master-roadmap' }]
        },
        {
          question: 'What valuation do you expect at Series A?',
          answer: 'Target Series A: $2-4M raise at $15-25M valuation (3-5x from pre-seed cap). Trigger metrics: 100K MAU, 2,500 merchants, 30% D30 retention, positive unit economics proven. Expected timing: 12-18 months post-launch.',
        },
        {
          question: 'What\'s your GCC expansion plan?',
          answer: 'Phase 1: UAE dominance (Year 1-2). Phase 2: Saudi Arabia - largest GCC market, 35M population (Year 2-3). Phase 3: Qatar, Kuwait, Bahrain, Oman (Year 3-4). Same playbook, adapted for local market. UAE success is the proof point before expansion.',
          links: [{ label: 'Geographic Expansion', href: '/geographic-expansion' }]
        },
        {
          question: 'Who are potential acquirers?',
          answer: 'Strategic buyers: 1) UAE banks (Emirates NBD, FAB, ADCB) - need customer engagement, 2) Telecoms (Etisalat, du) - super-app ambitions, 3) Retail conglomerates (Al-Futtaim, Majid Al Futtaim) - customer data, 4) Regional players (Careem, Noon), 5) International (Rakuten, PayPal/Honey expanding to MENA).',
        },
        {
          question: 'What are the key milestones to watch?',
          answer: 'Next 12 months: 1) Launch (March 1, 2026), 2) 500 merchants + 25K MAU (Month 3), 3) 1,500 merchants + 50K MAU (Month 6), 4) 2,500 merchants + 100K MAU (Month 12), 5) First profitable month, 6) Series A discussions. Monthly investor updates on all metrics.',
          links: [{ label: 'Execution Plan', href: '/execution-plan' }]
        },
        {
          question: 'What comparable exits support your valuation?',
          answer: 'MENA exits: Careem ($3.1B to Uber), Souq ($580M to Amazon), Fetchr ($100M+ funding). Loyalty/cashback: Ibotta ($1B+ valuation), Rakuten ($4B for Ebates), Honey ($4B to PayPal). At scale, rewards platforms trade at 8-15x revenue. Our $5M cap is conservative for the opportunity.',
        },
        {
          question: 'How big can this get?',
          answer: 'Realistic scenarios: 1) Base case: $50-100M exit (regional player acquired by bank/telecom), 2) Upside case: $200-500M exit (GCC leader, strategic acquisition), 3) Home run: $1B+ (became the Rakuten of MENA). Pre-seed investors would see 20-200x returns depending on outcome.',
        },
      ]
    },
    {
      title: 'Product & Technology',
      icon: Target,
      color: 'indigo',
      questions: [
        {
          question: 'Is the product built?',
          answer: 'Yes. MVP is complete with core features: merchant discovery, QR-based transaction tracking, cashback wallet, user profiles, merchant dashboard. Launch-ready for March 1, 2026. Post-launch iterations will add AI personalization, POS integrations, and card linking.',
        },
        {
          question: 'What is your tech stack?',
          answer: 'Mobile: React Native (iOS + Android from single codebase). Backend: Node.js with PostgreSQL. Infrastructure: AWS (scalable, UAE region available). AI/ML: Python for recommendations and fraud detection. This stack is proven, scalable, and has strong talent availability.',
        },
        {
          question: 'How does the discovery engine work?',
          answer: 'AI-powered recommendation combining: 1) Location proximity, 2) User preferences and history, 3) Time/context (lunch vs dinner, weekday vs weekend), 4) Merchant ratings and popularity, 5) Cashback rates and promotions. The more users transact, the smarter recommendations become.',
        },
        {
          question: 'How do you onboard merchants?',
          answer: 'Simple 3-step process: 1) Merchant signs up (5 minutes), 2) We verify business license and bank details, 3) They receive QR codes and training materials. No POS integration required initially - QR-based tracking works with any setup. Full onboarding in 24-48 hours.',
          links: [{ label: 'Merchant Onboarding', href: '/merchant-onboarding' }]
        },
        {
          question: 'Can this scale to millions of users?',
          answer: 'Yes. Architecture designed for 1M+ MAU from day one. AWS infrastructure auto-scales. Database sharding strategy ready. Real-time processing handles 1000+ transactions/second. We\'ve load-tested core flows. Scaling is an infrastructure problem, not an architecture problem.',
        },
      ]
    },
    {
      title: 'Go-to-Market',
      icon: TrendingUp,
      color: 'orange',
      questions: [
        {
          question: 'What is your launch strategy?',
          answer: 'Concentrated launch in Dubai Marina/JBR area (high foot traffic, affluent users, dense merchant concentration). Sign 50 merchants in 1 square km, then blanket with user acquisition. Prove model in one area, then replicate. Not spray-and-pray across all of Dubai.',
          links: [{ label: 'GTM Strategy', href: '/gtm' }]
        },
        {
          question: 'How will you acquire users?',
          answer: 'Multi-channel approach: 1) Merchant-driven (QR codes, staff referrals, signage), 2) Referral program (give AED 10, get AED 10), 3) Influencer partnerships (micro-influencers, deal hunters), 4) University ambassadors, 5) Community events. Target CAC: AED 25-30 blended.',
          links: [{ label: 'User Acquisition', href: '/user-acquisition' }]
        },
        {
          question: 'How will you acquire merchants?',
          answer: 'Founder-led sales initially (Rejaul + COO). Focus on cafe clusters, salon strips, boutique malls. Value prop: "Get new customers, pay only for results." No upfront fees. Free trial period. Case studies from early adopters. Phase 2: Build 15-person sales team.',
          links: [{ label: 'Merchant Acquisition', href: '/merchant-acquisition' }]
        },
        {
          question: 'What is your pricing for merchants?',
          answer: 'Commission-only model: Engine A (cafes, salons, boutiques): 15-20% on Nuqta-driven transactions. Engine B (supermarkets, electronics): 5-8%. Engine C (events, exhibitions): Custom partnerships. No setup fees. No monthly fees. Merchants only pay for results.',
          links: [{ label: 'Merchant Packages', href: '/merchant-packages' }]
        },
        {
          question: 'Why would users choose Nuqta over existing apps?',
          answer: '1) Real cashback, not points (10% vs 1-2% credit card rewards), 2) Works at local merchants (not just chains), 3) Discovery engine finds deals near you, 4) One app for all merchants (no juggling 10 loyalty apps), 5) No subscription required (unlike Entertainer).',
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
    </div>
  );
}
