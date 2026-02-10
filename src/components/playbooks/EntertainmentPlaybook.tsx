'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ChevronDown,
  ChevronRight,
  CheckSquare,
  Square,
  Users,
  Calendar,
  FileText,
  MessageSquare,
  Target,
  Phone,
  Mail,
  Clock,
  Bookmark,
  CheckCircle2,
  TrendingUp,
  Zap,
  Shield,
  DollarSign,
  BarChart3,
  Calculator,
  ArrowLeft,
  Film,
  Gamepad2,
  Ticket,
  Music,
  UserCheck,
  Monitor,
  Camera,
  Megaphone,
  MapPin,
  Receipt,
  Sparkles,
  Star,
  Gift,
  PartyPopper,
  Clapperboard,
  Store
} from 'lucide-react';

/**
 * ENTERTAINMENT SALES PLAYBOOK
 * Complete sales guide for entertainment merchant acquisition
 *
 * Industry: Cinemas, Arcades, Theme Parks, Bowling, Escape Rooms, Karaoke
 * Engine: A (High Margin 50-70%) / Engine C (Event-based)
 * Commission: 15-20% (Engine A) / 3-5% (Engine C events)
 *
 * UAE Market Stats:
 * - Average transaction: AED 100-300
 * - Visit frequency: 1-2x per month
 * - Margin: 50-70%
 * - Entertainment market UAE: $3B
 * - 8% of Nuqta LOIs are entertainment
 */

interface SectionProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const CollapsibleSection = ({ title, icon: Icon, children, defaultOpen = false }: SectionProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-6 hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-fuchsia-500/20 flex items-center justify-center">
            <Icon className="text-fuchsia-400" size={20} />
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-white">{title}</h2>
        </div>
        {isOpen ? <ChevronDown className="text-slate-400" /> : <ChevronRight className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="px-4 sm:px-6 pb-6 border-t border-white/10 pt-4">
          {children}
        </div>
      )}
    </div>
  );
};

const ChecklistItem = ({ children }: { children: React.ReactNode }) => {
  const [checked, setChecked] = useState(false);

  return (
    <button
      onClick={() => setChecked(!checked)}
      className={`flex items-start gap-3 w-full text-left p-2 rounded-lg transition-all ${
        checked ? 'bg-green-500/10' : 'hover:bg-white/5'
      }`}
    >
      {checked ? (
        <CheckSquare className="text-green-400 flex-shrink-0 mt-0.5" size={18} />
      ) : (
        <Square className="text-slate-500 flex-shrink-0 mt-0.5" size={18} />
      )}
      <span className={`text-sm ${checked ? 'text-slate-500 line-through' : 'text-slate-300'}`}>
        {children}
      </span>
    </button>
  );
};

const EntertainmentPlaybook = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-fuchsia-500/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <Link href="/merchant-playbook" className="inline-flex items-center gap-2 text-slate-400 hover:text-fuchsia-400 mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>All Playbooks</span>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-fuchsia-500/20 rounded-full mb-6">
              <PartyPopper className="text-fuchsia-400" size={16} />
              <span className="text-fuchsia-400 text-sm font-medium">Engine A/C • High Margin / Events</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              <span className="text-fuchsia-400">Entertainment</span> Sales Playbook
            </h1>
            <p className="text-slate-400 text-lg">Complete guide to signing entertainment merchants</p>
            <p className="text-slate-500 text-sm mt-2">Experience-Driven • High Repeat Potential</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Avg Transaction', value: 'AED 180' },
            { label: 'Frequency', value: '1-2x/month' },
            { label: 'Commission', value: '15-20%' },
            { label: 'Nuqta LOIs', value: '8%' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <p className="text-fuchsia-400 text-xl font-black">{stat.value}</p>
              <p className="text-slate-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Engine Note */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-fuchsia-500/10 border border-fuchsia-500/30 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Ticket className="text-fuchsia-400 flex-shrink-0 mt-1" size={20} />
            <div>
              <h3 className="text-fuchsia-400 font-bold mb-1">Dual Engine Option</h3>
              <p className="text-slate-300 text-sm">
                Entertainment venues can use <strong>Engine A</strong> (15-20% on regular visits) for standard activities,
                or <strong>Engine C</strong> (3-5% event-based) for concerts, special events, and ticket sales.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-32">

        {/* Part 1: Industry Overview */}
        <div className="mb-8">
          <h2 className="text-fuchsia-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-fuchsia-500 text-[#0a1628] flex items-center justify-center text-xs font-black">1</span>
            Industry Overview
          </h2>

          <CollapsibleSection title="Entertainment Market in UAE" icon={BarChart3} defaultOpen={true}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'UAE Entertainment', value: '$3B' },
                  { label: 'Cinemas', value: '100+' },
                  { label: 'Attractions', value: '200+' },
                  { label: 'Avg Margin', value: '50-70%' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                    <p className="text-fuchsia-400 text-lg font-bold">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-red-400 font-semibold mb-2">🇦🇪 GCC-Specific Pain Points</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• <strong className="text-red-300">Weekend packed, weekdays dead</strong> - 80% revenue in 2 days</li>
                  <li>• <strong className="text-red-300">Netflix/Disney+ killing cinema</strong> - why leave home?</li>
                  <li>• <strong className="text-red-300">Summer exodus crisis</strong> - 40% drop as families travel</li>
                  <li>• <strong className="text-red-300">High fixed costs</strong> - mall rent, staff, equipment regardless of traffic</li>
                  <li>• <strong className="text-red-300">School holiday dependency</strong> - dead during term time</li>
                  <li>• <strong className="text-red-300">Event-driven market</strong> - one bad movie = empty theaters</li>
                  <li>• <strong className="text-red-300">Birthday party competition</strong> - every mall has 5 options</li>
                  <li>• <strong className="text-red-300">Ramadan operational shifts</strong> - daytime closure, iftar rush</li>
                  <li>• <strong className="text-red-300">Theme park fatigue</strong> - Dubai Parks struggles for repeat visits</li>
                  <li>• <strong className="text-red-300">Entertainer app conditioning</strong> - customers expect BOGO</li>
                </ul>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">✨ How Nuqta Solves Each Pain Point</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• <strong className="text-red-300">Weekdays dead?</strong> → <strong className="text-emerald-300">Double coins on Tue-Wed</strong> - incentivize weekday visits, balance traffic</li>
                  <li>• <strong className="text-red-300">Netflix killing cinema?</strong> → <strong className="text-emerald-300">Coins make leaving home worth it</strong> - rewards for experience Netflix can&apos;t offer</li>
                  <li>• <strong className="text-red-300">Summer 40% drop?</strong> → <strong className="text-emerald-300">Staycation entertainment campaigns</strong> - target families who stayed</li>
                  <li>• <strong className="text-red-300">High fixed costs?</strong> → <strong className="text-emerald-300">500K+ users discovering your venue</strong> - fill capacity without ad spend</li>
                  <li>• <strong className="text-red-300">School holiday only?</strong> → <strong className="text-emerald-300">Weekend campaigns year-round</strong> - drive traffic during term time</li>
                  <li>• <strong className="text-red-300">Bad movie = empty?</strong> → <strong className="text-emerald-300">Coin bonuses on slow releases</strong> - incentivize any movie, not just blockbusters</li>
                  <li>• <strong className="text-red-300">Birthday party competition?</strong> → <strong className="text-emerald-300">Birthday reminders + rewards</strong> - target parents with kids turning X age</li>
                  <li>• <strong className="text-red-300">Ramadan shifts?</strong> → <strong className="text-emerald-300">Post-iftar entertainment</strong> - target evening activities during holy month</li>
                  <li>• <strong className="text-red-300">Theme park fatigue?</strong> → <strong className="text-emerald-300">Annual pass rewards</strong> - coins drive repeat visits, build habit</li>
                  <li>• <strong className="text-red-300">Entertainer BOGO?</strong> → <strong className="text-emerald-300">Cashback preserves pricing</strong> - no discounts, maintain integrity</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="What Nuqta Provides for Entertainment" icon={Sparkles} defaultOpen={true}>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">
                For entertainment venues, Nuqta drives repeat visits and fills slow periods with targeted campaigns.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: UserCheck,
                    title: 'Dedicated Account Manager',
                    desc: 'Personal manager for campaign planning, event promotions, and seasonal activations.',
                    tier: 'Basic+'
                  },
                  {
                    icon: Monitor,
                    title: 'POS/Ticketing Integration',
                    desc: 'Seamless integration with your ticketing system for automatic transaction logging.',
                    tier: 'All Tiers'
                  },
                  {
                    icon: Camera,
                    title: 'Content Creation',
                    desc: 'Professional video content, Instagram Reels, and promotional materials for your venue.',
                    tier: 'Golden+'
                  },
                  {
                    icon: Calendar,
                    title: 'Birthday Marketing',
                    desc: 'Automated birthday reminders with special coin offers for celebrations.',
                    tier: 'Basic+'
                  },
                  {
                    icon: PartyPopper,
                    title: 'Event Promotions',
                    desc: 'Push notifications and campaigns for special events, new experiences, and limited-time offers.',
                    tier: 'Golden+'
                  },
                  {
                    icon: Megaphone,
                    title: 'Weekday Campaigns',
                    desc: 'Targeted promotions to fill slow periods with bonus coins and special deals.',
                    tier: 'Basic+'
                  },
                  {
                    icon: MapPin,
                    title: 'In-Venue Materials',
                    desc: 'Ticket counter displays, table tents, and venue signage for Nuqta promotion.',
                    tier: 'All Tiers'
                  },
                  {
                    icon: Gift,
                    title: 'Gift Card Integration',
                    desc: 'Nuqta coin gift cards for birthdays, holidays, and corporate gifting.',
                    tier: 'Golden+'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-fuchsia-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-fuchsia-400" size={20} />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white font-bold text-sm">{item.title}</h4>
                          <span className="text-xs px-2 py-0.5 bg-fuchsia-500/20 text-fuchsia-400 rounded-full">{item.tier}</span>
                        </div>
                        <p className="text-slate-400 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 rounded-xl p-4 border border-fuchsia-500/30">
                <h4 className="text-fuchsia-400 font-bold mb-2">🎉 Sales Tip: Fill the Slow Times</h4>
                <p className="text-slate-300 text-sm">
                  &quot;Your venue is packed on weekends, empty on Tuesdays. Nuqta&apos;s targeted campaigns turn slow days
                  into profit. Double coins on weekdays? Suddenly everyone wants to bowl on Monday.&quot;
                </p>
              </div>

              {/* Investment Breakdown */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-4">
                <h4 className="text-white font-bold mb-3">📊 How We Invest Your Package Fee</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-fuchsia-500/10 rounded-lg p-4 border border-fuchsia-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-fuchsia-400 font-bold text-2xl">70%</span>
                      <span className="text-fuchsia-400 text-sm font-medium">Content & Creative</span>
                    </div>
                    <ul className="text-slate-300 text-xs space-y-1">
                      <li>• Professional venue photography</li>
                      <li>• Event videos & Reels</li>
                      <li>• Social media content</li>
                      <li>• UGC creation</li>
                      <li>• Entertainment influencer deals</li>
                      <li>• Graphics & design</li>
                    </ul>
                  </div>
                  <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-blue-400 font-bold text-2xl">30%</span>
                      <span className="text-blue-400 text-sm font-medium">Paid Advertising</span>
                    </div>
                    <ul className="text-slate-300 text-xs space-y-1">
                      <li>• Meta/Instagram ads</li>
                      <li>• Google Ads</li>
                      <li>• TikTok promotions</li>
                      <li>• Retargeting campaigns</li>
                      <li>• Performance marketing</li>
                      <li>• In-app promotions</li>
                    </ul>
                  </div>
                </div>

                {/* Bonus: In-App Ad Credit */}
                <div className="mt-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-500/30">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500/30 rounded-full p-2">
                      <span className="text-2xl">🎁</span>
                    </div>
                    <div>
                      <h5 className="text-green-400 font-bold">BONUS: 100% In-App Ad Credit</h5>
                      <p className="text-slate-300 text-sm">
                        Whatever you spend on your package, you get the <span className="text-green-400 font-bold">same amount as in-app advertising credit</span> to promote your venue to Nuqta users!
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 bg-black/20 rounded-lg p-3">
                    <p className="text-slate-400 text-xs">
                      <span className="text-white font-medium">Example:</span> Pay AED 5,000/month package → Get AED 5,000 in-app ad credit to boost your visibility to thousands of Nuqta app users
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Target Sub-Categories" icon={Gamepad2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  category: 'Cinema',
                  avgBill: 'AED 100-200',
                  frequency: '1-2x/month',
                  margin: '60%',
                  bestApproach: 'Focus on concessions, premium formats'
                },
                {
                  category: 'Arcade/Gaming',
                  avgBill: 'AED 80-150',
                  frequency: '2-4x/month',
                  margin: '70%',
                  bestApproach: 'Focus on repeat visits, top-ups'
                },
                {
                  category: 'Theme Park',
                  avgBill: 'AED 200-500',
                  frequency: '2-4x/year',
                  margin: '50%',
                  bestApproach: 'Focus on annual passes, family packages'
                },
                {
                  category: 'Bowling/Billiards',
                  avgBill: 'AED 100-200',
                  frequency: '1-2x/month',
                  margin: '65%',
                  bestApproach: 'Focus on groups, F&B upsell'
                },
                {
                  category: 'Escape Room',
                  avgBill: 'AED 150-300',
                  frequency: '1x/2 months',
                  margin: '70%',
                  bestApproach: 'Focus on groups, corporate events'
                },
                {
                  category: 'Trampoline/Play Zone',
                  avgBill: 'AED 80-200',
                  frequency: '1-2x/month',
                  margin: '65%',
                  bestApproach: 'Focus on birthdays, memberships'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-fuchsia-400 font-bold mb-2">{item.category}</h4>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                    <div>
                      <span className="text-slate-500">Avg Bill:</span>
                      <span className="text-white ml-1">{item.avgBill}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Frequency:</span>
                      <span className="text-white ml-1">{item.frequency}</span>
                    </div>
                    <div>
                      <span className="text-slate-500">Margin:</span>
                      <span className="text-fuchsia-400 ml-1">{item.margin}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-xs italic">{item.bestApproach}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Competitor Landscape" icon={Target}>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-fuchsia-400 font-medium py-2">Competitor</th>
                      <th className="text-left text-fuchsia-400 font-medium py-2">Model</th>
                      <th className="text-left text-fuchsia-400 font-medium py-2">Cost</th>
                      <th className="text-left text-fuchsia-400 font-medium py-2">Weakness</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Entertainer</td>
                      <td className="py-2">2-for-1 discounts</td>
                      <td className="py-2">50% discount</td>
                      <td className="py-2">Devalues brand, one-time use</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Cobone/Groupon</td>
                      <td className="py-2">Deep discounts</td>
                      <td className="py-2 text-red-400">30-50% off</td>
                      <td className="py-2">Attracts deal-seekers, no loyalty</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Mall Loyalty</td>
                      <td className="py-2">Mall points</td>
                      <td className="py-2">Internal</td>
                      <td className="py-2">Only works in that mall</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Netflix/Home Gaming</td>
                      <td className="py-2">Home entertainment</td>
                      <td className="py-2">Monthly sub</td>
                      <td className="py-2">Can&apos;t match social experience</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-fuchsia-400">Nuqta</td>
                      <td className="py-2">Loyalty + Discovery</td>
                      <td className="py-2 text-fuchsia-400">15-20%</td>
                      <td className="py-2 text-fuchsia-400">Best value</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-fuchsia-500/10 rounded-xl p-4 border border-fuchsia-500/20">
                <h4 className="text-fuchsia-400 font-semibold mb-2">Our Advantage</h4>
                <p className="text-slate-300 text-sm">
                  Entertainer gives 2-for-1 once. Nuqta builds relationships. Customers earn every visit and
                  keep coming back. No devaluation, just rewards for loyalty.
                </p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 2: The Pitch */}
        <div className="mb-8">
          <h2 className="text-fuchsia-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-fuchsia-500 text-[#0a1628] flex items-center justify-center text-xs font-black">2</span>
            The Pitch
          </h2>

          <CollapsibleSection title="60-Second Pitch" icon={Zap} defaultOpen={true}>
            <div className="bg-gradient-to-r from-fuchsia-500/20 to-transparent rounded-xl p-4 border border-fuchsia-500/30">
              <p className="text-white leading-relaxed">
                &quot;Hi [Name], love this venue! Quick question - what are your weekday numbers like compared to weekends?
                <br /><br />
                Most entertainment venues are packed Saturday, empty Tuesday. But your fixed costs don&apos;t change, right?
                <br /><br />
                We&apos;ve built something to fix that. When families visit, they earn 10% back in Nuqta coins. When their kid&apos;s birthday comes up, we remind them. When they&apos;re bored on a Tuesday evening, we push a notification: &apos;Double coins at [Your Venue] today!&apos;
                <br /><br />
                Suddenly that empty Tuesday has a reason to visit. And they keep coming back because they have coins to spend.
                <br /><br />
                You pay 15-20% on Nuqta sales. But you&apos;re filling empty slots - that&apos;s almost pure profit. Want to see the numbers?&quot;
              </p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="ROI Calculator" icon={Calculator}>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">Step-by-Step Calculation</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">1. Average transaction:</span>
                    <span className="text-white font-mono">AED ___</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">2. Nuqta customers/month (estimate 100-300):</span>
                    <span className="text-white font-mono">___ customers</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">3. Weekday fill rate increase:</span>
                    <span className="text-fuchsia-400 font-mono">+30-40%</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">4. Repeat visit increase:</span>
                    <span className="text-fuchsia-400 font-mono">× 1.8 visits</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-fuchsia-500/20 rounded-lg border border-fuchsia-500/30">
                    <span className="text-fuchsia-400">5. Extra monthly revenue:</span>
                    <span className="text-fuchsia-400 font-mono font-bold">AED ___</span>
                  </div>
                </div>
              </div>

              <div className="bg-fuchsia-500/10 rounded-xl p-4 border border-fuchsia-500/20">
                <h4 className="text-fuchsia-400 font-semibold mb-2">Example: Trampoline Park</h4>
                <p className="text-slate-300 text-sm">
                  AED 150 avg × 200 Nuqta customers × 0.8 extra visits = <strong className="text-white">AED 24,000/month extra</strong>
                  <br />
                  Cost: AED 4,080 (17%) | <strong className="text-fuchsia-400">Extra profit at 65% margin: AED 11,520/month</strong>
                </p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Event & Birthday Marketing" icon={PartyPopper}>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">
                Entertainment is event-driven. Nuqta&apos;s smart campaigns ensure YOUR venue is top of mind for every occasion.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { event: 'Birthday Coming', timing: '2 weeks before', message: 'Celebrate at [Venue] with bonus coins' },
                  { event: 'School Holidays', timing: 'Week before', message: 'Keep the kids entertained + earn rewards' },
                  { event: 'Weekend Plans', timing: 'Thursday', message: 'What are you doing this weekend?' },
                  { event: 'Weekday Special', timing: 'Tues-Wed', message: 'Double coins today only!' },
                  { event: 'New Experience', timing: 'Launch day', message: 'Be first to try our new [activity]' },
                  { event: 'Group Booking', timing: 'Anytime', message: 'Plan your office outing - bonus coins for 10+' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                      <PartyPopper className="text-fuchsia-400" size={16} />
                      <h4 className="text-white font-semibold text-sm">{item.event}</h4>
                    </div>
                    <p className="text-slate-400 text-xs">
                      <span className="text-fuchsia-400">{item.timing}</span> • {item.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 3: Objection Handling */}
        <div className="mb-8">
          <h2 className="text-fuchsia-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-fuchsia-500 text-[#0a1628] flex items-center justify-center text-xs font-black">3</span>
            Objection Handling
          </h2>

          <CollapsibleSection title="Top 10 Objections" icon={Shield} defaultOpen={true}>
            <div className="space-y-4">
              {[
                {
                  objection: '"We\'re already on Entertainer"',
                  response: 'Entertainer gives 50% off once. That\'s it. Nuqta builds relationships - customers earn every visit and keep coming back. Plus, Entertainer devalues your brand. Nuqta is rewards, not discounts.'
                },
                {
                  objection: '"15-20% is too much"',
                  response: 'Compare to Groupon taking 50%. And we bring repeat customers, not one-time deal seekers. At 65% margin, you still keep 45%+ profit on Nuqta sales.'
                },
                {
                  objection: '"Entertainment is impulse - people don\'t plan"',
                  response: 'True! But when they\'re deciding where to go on Saturday, coins at YOUR venue tip the decision. And our push notifications catch them in that decision moment.'
                },
                {
                  objection: '"Our weekends are already full"',
                  response: 'Perfect! Let\'s fill your weekdays. Nuqta\'s targeted campaigns drive traffic to slow periods. Double coins on Tuesday? Suddenly Tuesday is interesting.'
                },
                {
                  objection: '"Families only come for birthdays"',
                  response: 'That\'s leaving money on the table. With Nuqta, birthday visitors become regular visitors. They have coins to spend - why not use them on a random weekend?'
                },
                {
                  objection: '"We have our own loyalty app"',
                  response: 'Does it bring NEW customers? Nuqta has 500K+ users looking for things to do. They can discover YOUR venue. Your app only works for existing customers.'
                },
                {
                  objection: '"Netflix and home gaming are the real competition"',
                  response: 'Exactly! You need a reason for families to leave the house. Nuqta coins give them that reason. \"Earn rewards\" beats \"stay home\" for many families.'
                },
                {
                  objection: '"We do corporate events, not consumers"',
                  response: 'Engine C is perfect for events - just 3-5% commission on ticket sales. Plus, the employees at those companies are Nuqta users - turn corporate events into personal visits.'
                },
                {
                  objection: '"Seasonal variations are too big"',
                  response: 'That\'s why Nuqta helps! We run holiday campaigns, school break promotions, weekend pushes. Our marketing aligns with your peak seasons AND helps fill the slow ones.'
                },
                {
                  objection: '"Let me think about it after the summer/winter"',
                  response: 'Holidays are coming! Get set up now, run double-coin campaigns, and capture those vacation visitors. They\'ll return when school starts too.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 text-xs font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-white font-medium">{item.objection}</p>
                  </div>
                  <div className="flex items-start gap-3 ml-9">
                    <ChevronRight className="text-fuchsia-400 flex-shrink-0 mt-0.5" size={16} />
                    <p className="text-slate-300 text-sm">{item.response}</p>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 4: Closing */}
        <div className="mb-8">
          <h2 className="text-fuchsia-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-fuchsia-500 text-[#0a1628] flex items-center justify-center text-xs font-black">4</span>
            Closing the Deal
          </h2>

          <CollapsibleSection title="Closing Scripts" icon={Target} defaultOpen={true}>
            <div className="space-y-4">
              <div className="bg-fuchsia-500/10 rounded-xl p-4 border border-fuchsia-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="text-fuchsia-400" size={18} />
                  <h4 className="text-fuchsia-400 font-semibold">The Weekday Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;Your weekends are full, but Tuesdays are empty. What if I could fill 30% of those empty Tuesday slots
                  at almost pure profit? That&apos;s what Nuqta does.&quot;
                </p>
              </div>

              <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-yellow-400" size={18} />
                  <h4 className="text-yellow-400 font-semibold">The Holiday Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;School holidays start in [X weeks]. Get set up now, run family fun campaigns,
                  and capture all those families looking for things to do.&quot;
                </p>
              </div>

              <div className="bg-fuchsia-500/10 rounded-xl p-4 border border-fuchsia-500/30">
                <h4 className="text-fuchsia-400 font-semibold mb-2">Never Leave Without:</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>✓ Signed LOI or contract</li>
                  <li>✓ Weekend vs weekday traffic numbers</li>
                  <li>✓ Birthday party volume</li>
                  <li>✓ WhatsApp of manager/owner</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Quick Reference */}
        <div className="mb-8">
          <h2 className="text-fuchsia-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-fuchsia-500 text-[#0a1628] flex items-center justify-center text-xs font-black">5</span>
            Quick Reference
          </h2>

          <CollapsibleSection title="Key Stats" icon={Bookmark} defaultOpen={true}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: 'UAE Entertainment', value: '$3B' },
                { label: 'Avg Transaction', value: 'AED 180' },
                { label: 'Commission', value: '15-20%' },
                { label: 'Avg Margin', value: '50-70%' },
                { label: 'Repeat Increase', value: '+80%' },
                { label: 'Nuqta Users', value: '500K+' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-fuchsia-400 text-lg sm:text-xl font-bold">{stat.value}</p>
                  <p className="text-slate-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Power Phrases" icon={Zap}>
            <div className="space-y-2">
              {[
                'Fill your empty weekdays',
                'Turn birthday visitors into regulars',
                'Beat home entertainment with rewards',
                'Rewards, not discounts - protect your brand',
                '500K families looking for fun',
                'Push notifications at decision moment'
              ].map((phrase, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-fuchsia-500/10 rounded-lg px-3 py-2 border border-fuchsia-500/20">
                  <CheckCircle2 className="text-fuchsia-400 flex-shrink-0" size={16} />
                  <p className="text-white text-sm font-medium">{phrase}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Marketing Campaigns Section */}
        <div className="mb-8">
          <h2 className="text-fuchsia-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-fuchsia-500 text-white flex items-center justify-center text-xs font-black">★</span>
            Marketing Campaigns
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Merchant Acquisition Campaign */}
            <div className="bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-2xl p-6 border border-violet-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/30 flex items-center justify-center">
                  <Store className="text-violet-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Merchant Acquisition</h3>
                  <p className="text-violet-400 text-sm">How to onboard entertainment venues</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Battle-tested campaigns to sign cinemas, arcades, and entertainment centers. Experience focus with group rewards.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-violet-400" />
                  <span>Mall Blitz: Entertainment zone signups</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-violet-400" />
                  <span>Category Conquest: Entertainment vertical</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-violet-400" />
                  <span>Content Studio: Experience showcases</span>
                </div>
              </div>
              <Link
                href="/marketing-war-room?tab=merchant-campaigns"
                className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500 text-white rounded-lg font-semibold text-sm hover:bg-violet-600 transition-colors"
              >
                <Megaphone size={16} />
                View Merchant Campaigns
              </Link>
            </div>

            {/* User Acquisition Campaign */}
            <div className="bg-gradient-to-br from-pink-500/20 to-orange-500/20 rounded-2xl p-6 border border-pink-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/30 flex items-center justify-center">
                  <Users className="text-pink-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">User Acquisition</h3>
                  <p className="text-pink-400 text-sm">How to bring visitors to venues</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Viral campaigns for families and friends. Weekend deals, group rewards, and experience sharing.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-pink-400" />
                  <span>Nuqta Finds: Experience review UGC</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-pink-400" />
                  <span>Flash Frenzy: Weekend entertainment deals</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-pink-400" />
                  <span>Golden Chain: Friend group referrals</span>
                </div>
              </div>
              <Link
                href="/marketing-war-room?tab=user-campaigns"
                className="inline-flex items-center gap-2 px-4 py-2 bg-pink-500 text-white rounded-lg font-semibold text-sm hover:bg-pink-600 transition-colors"
              >
                <Users size={16} />
                View User Campaigns
              </Link>
            </div>
          </div>

          {/* Quick Campaign Stats */}
          <div className="mt-4 bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-fuchsia-400">5</p>
                <p className="text-xs text-slate-400">Merchant Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-pink-400">6</p>
                <p className="text-xs text-slate-400">User Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-violet-400">AED 200</p>
                <p className="text-xs text-slate-400">Avg Spend</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#c9a227]">15-20%</p>
                <p className="text-xs text-slate-400">Commission</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-fuchsia-500/20 to-transparent rounded-2xl p-6 border border-fuchsia-500/30 text-center">
          <PartyPopper className="text-fuchsia-400 mx-auto mb-3" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Ready for the Meeting?</h3>
          <p className="text-slate-400 text-sm mb-4">Access the pitch deck and other materials</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/deck-merchant" className="px-4 py-2 bg-fuchsia-500 text-white rounded-full font-semibold text-sm hover:bg-fuchsia-600 transition-colors">
              View Entertainment Deck
            </Link>
            <Link href="/contracts" className="px-4 py-2 bg-white/10 text-white rounded-full font-semibold text-sm hover:bg-white/20 transition-colors">
              Contract Template
            </Link>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-4 justify-center text-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <Mail size={14} />
              <span>merchants@nuqtapp.com</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Phone size={14} />
              <span>+971 50 376 4345</span>
            </div>
          </div>
        </div>

        <p className="text-center text-slate-600 text-xs mt-8">
          Entertainment Playbook v1.0 • Last Updated: February 2026
        </p>
      </div>
    </div>
  );
};

export default EntertainmentPlaybook;
