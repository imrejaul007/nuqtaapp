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
  AlertCircle,
  Phone,
  Mail,
  Clock,
  Bookmark,
  CheckCircle2,
  XCircle,
  TrendingUp,
  Building2,
  Zap,
  Shield,
  DollarSign,
  Percent,
  BarChart3,
  MapPin,
  Calculator,
  ArrowLeft,
  Star,
  Gift,
  Coins,
  Megaphone,
  Camera,
  UserCheck,
  Monitor,
  TrendingDown,
  Receipt,
  Settings,
  Sparkles,
  Store,
  PartyPopper,
  Ticket,
  Music,
  Trophy,
  Tent,
  Globe,
  Briefcase,
  CalendarDays,
  Timer,
  Wallet,
  Download,
  ShoppingBag
} from 'lucide-react';

/**
 * EVENTS & EXHIBITIONS SALES PLAYBOOK
 * Complete sales guide for event organizer partnerships
 *
 * Event Types Covered:
 * - Global Village (seasonal entertainment)
 * - Trade Exhibitions (GITEX, Arabian Travel Market, etc.)
 * - Concerts & Music Festivals
 * - Sports Events
 * - Corporate Events
 * - Seasonal Events (DSF, Ramadan tents, etc.)
 *
 * Key Model:
 * - Short-term events (5-7 days): AED 100 Event Coins for all visitors
 * - Long-term events (months): Ticket-linked coins
 * - Standard merchant terms (5-8% commission)
 * - Organizer gets 10% of Nuqta revenue
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
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
            <Icon className="text-purple-400" size={20} />
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

const EventsPlaybook = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-purple-500/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <Link href="/merchant-playbook" className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-400 mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>All Playbooks</span>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full mb-6">
              <PartyPopper className="text-purple-400" size={16} />
              <span className="text-purple-400 text-sm font-medium">Events & Exhibitions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              <span className="text-purple-400">Events & Exhibitions</span> Sales Playbook
            </h1>
            <p className="text-slate-400 text-lg">Complete guide to partnering with event organizers</p>
            <p className="text-slate-500 text-sm mt-2">Global Village, GITEX, Concerts, Festivals & More</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'UAE Events/Year', value: '500+', color: 'purple' },
            { label: 'GV Visitors', value: '7M+', color: 'amber' },
            { label: 'GITEX Visitors', value: '180K+', color: 'emerald' },
            { label: 'Organizer Share', value: '10%', color: 'blue' }
          ].map((stat, idx) => (
            <div key={idx} className={`bg-${stat.color}-500/10 border border-${stat.color}-500/30 rounded-xl p-3 text-center`}>
              <p className={`text-${stat.color}-400 text-xl font-black`}>{stat.value}</p>
              <p className="text-slate-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-32">

        {/* Part 1: Event Types Overview */}
        <div className="mb-8">
          <h2 className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-500 text-[#0a1628] flex items-center justify-center text-xs font-black">1</span>
            Event Types & Models
          </h2>

          <CollapsibleSection title="Event Categories We Target" icon={Calendar} defaultOpen={true}>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Globe,
                    type: 'Global Village & Theme Parks',
                    examples: 'Global Village, IMG Worlds, Dubai Parks',
                    visitors: '5-10M/season',
                    model: 'Ticket-linked coins',
                    duration: '5-6 months'
                  },
                  {
                    icon: Briefcase,
                    type: 'Trade Exhibitions',
                    examples: 'GITEX, Arabian Travel Market, Gulfood',
                    visitors: '50K-200K',
                    model: 'Event coins (AED 100)',
                    duration: '3-7 days'
                  },
                  {
                    icon: Music,
                    type: 'Concerts & Festivals',
                    examples: 'Jazz Fest, F1 Concerts, Beach Festivals',
                    visitors: '10K-100K',
                    model: 'Event coins (AED 50-100)',
                    duration: '1-3 days'
                  },
                  {
                    icon: Trophy,
                    type: 'Sports Events',
                    examples: 'Dubai World Cup, Golf, Tennis, F1',
                    visitors: '30K-100K',
                    model: 'Ticket-linked coins',
                    duration: '1-5 days'
                  },
                  {
                    icon: Tent,
                    type: 'Seasonal Events',
                    examples: 'DSF, Ramadan Tents, Diwali Markets',
                    visitors: '100K-2M',
                    model: 'Event coins + offers',
                    duration: '2-4 weeks'
                  },
                  {
                    icon: Building2,
                    type: 'Corporate Events',
                    examples: 'Conferences, Award Shows, Galas',
                    visitors: '500-5K',
                    model: 'Custom coins program',
                    duration: '1-2 days'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-purple-400" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-sm mb-1">{item.type}</h4>
                        <p className="text-slate-500 text-xs mb-2">{item.examples}</p>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          <div className="bg-purple-500/10 rounded px-2 py-1">
                            <span className="text-purple-400">{item.visitors}</span>
                          </div>
                          <div className="bg-emerald-500/10 rounded px-2 py-1">
                            <span className="text-emerald-400">{item.duration}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Two Partnership Models" icon={Settings} defaultOpen={true}>
            <div className="space-y-4">
              {/* Model 1: Ticket-Linked */}
              <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/30">
                <h4 className="text-amber-400 font-bold mb-3 flex items-center gap-2">
                  <Ticket className="text-amber-400" size={18} />
                  Model 1: Ticket-Linked Coins (Long Events)
                </h4>
                <p className="text-slate-300 text-sm mb-3">Best for: Global Village, Theme Parks, Seasonal Events (2+ weeks)</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white font-semibold mb-1">How it Works</p>
                    <ul className="text-slate-400 text-xs space-y-1">
                      <li>• Buy ticket (AED 25-50) → Get equal coins</li>
                      <li>• Spend AED 300+ inside → Unlock coins</li>
                      <li>• Coins expire at event end</li>
                      <li>• Tied to ticket purchase</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white font-semibold mb-1">Example: Global Village</p>
                    <ul className="text-slate-400 text-xs space-y-1">
                      <li>• 7M visitors, AED 30 ticket</li>
                      <li>• Get AED 30 GV Coins</li>
                      <li>• Spend AED 300 at pavilions</li>
                      <li>• GMV tracked: AED 200-400M</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Model 2: Event Coins */}
              <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30">
                <h4 className="text-purple-400 font-bold mb-3 flex items-center gap-2">
                  <Coins className="text-purple-400" size={18} />
                  Model 2: Event Coins (Short Events)
                </h4>
                <p className="text-slate-300 text-sm mb-3">Best for: Exhibitions, Concerts, 1-7 day events</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white font-semibold mb-1">How it Works</p>
                    <ul className="text-slate-400 text-xs space-y-1">
                      <li>• Register at Nuqta booth → Get AED 100</li>
                      <li>• Works for NEW + EXISTING users</li>
                      <li>• Spend AED 500+ → Unlock coins</li>
                      <li>• Fresh coins for every event</li>
                    </ul>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white font-semibold mb-1">Example: GITEX</p>
                    <ul className="text-slate-400 text-xs space-y-1">
                      <li>• 180K visitors, 5 days</li>
                      <li>• Register → AED 100 GITEX Coins</li>
                      <li>• Spend at exhibitor booths</li>
                      <li>• Existing Nuqta users get BOTH wallets</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Revenue Split */}
              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/30">
                <h4 className="text-emerald-400 font-bold mb-2">💰 Revenue Model for Organizers</h4>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-emerald-400 text-2xl font-black">5-8%</p>
                    <p className="text-slate-400 text-xs">Merchant Commission</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-purple-400 text-2xl font-black">10%</p>
                    <p className="text-slate-400 text-xs">Organizer Share</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-amber-400 text-2xl font-black">AED 0</p>
                    <p className="text-slate-400 text-xs">Upfront Cost</p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 2: Pain Points */}
        <div className="mb-8">
          <h2 className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-500 text-[#0a1628] flex items-center justify-center text-xs font-black">2</span>
            Pain Points & Solutions
          </h2>

          <CollapsibleSection title="Event Organizer Pain Points" icon={AlertCircle} defaultOpen={true}>
            <div className="space-y-4">
              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-red-400 font-semibold mb-2">😰 GCC Event Organizer Struggles</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• <strong className="text-red-300">70% of visitors just browse</strong> - don&apos;t make purchases at exhibitor booths</li>
                  <li>• <strong className="text-red-300">Merchants don&apos;t renew</strong> - if they don&apos;t make money, they won&apos;t come back next year</li>
                  <li>• <strong className="text-red-300">No spending data</strong> - can&apos;t prove ROI to merchants or sponsors</li>
                  <li>• <strong className="text-red-300">One-time visitors</strong> - no way to retarget or re-engage after event ends</li>
                  <li>• <strong className="text-red-300">Low average spend</strong> - AED 50-100 impulse purchases vs AED 500+ potential</li>
                  <li>• <strong className="text-red-300">F&B competition with malls</strong> - visitors prefer nearby restaurants/cafes</li>
                  <li>• <strong className="text-red-300">Peak hour chaos</strong> - no way to incentivize off-peak visits</li>
                  <li>• <strong className="text-red-300">Sponsor ROI questions</strong> - can&apos;t quantify brand exposure value</li>
                  <li>• <strong className="text-red-300">Staff theft concerns</strong> - cash handling issues at food stalls</li>
                  <li>• <strong className="text-red-300">Weather dependency</strong> - outdoor events lose visitors in summer/rain</li>
                </ul>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">✨ How Nuqta Solves Each Pain Point</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• <strong className="text-red-300">70% just browse?</strong> → <strong className="text-emerald-300">Coins create spending incentive</strong> - visitors MUST spend AED 300-500 to unlock their coins, converting browsers to buyers</li>
                  <li>• <strong className="text-red-300">Merchants don&apos;t renew?</strong> → <strong className="text-emerald-300">Proven sales data</strong> - show merchants exactly how much Nuqta drove, making renewal easy</li>
                  <li>• <strong className="text-red-300">No spending data?</strong> → <strong className="text-emerald-300">Real-time dashboard</strong> - every transaction tracked, spending patterns, popular booths, peak hours</li>
                  <li>• <strong className="text-red-300">One-time visitors?</strong> → <strong className="text-emerald-300">Database for life</strong> - all visitors become Nuqta users, retarget for next year&apos;s event</li>
                  <li>• <strong className="text-red-300">Low average spend?</strong> → <strong className="text-emerald-300">AED 300-500 minimum</strong> - coin unlock threshold guarantees higher basket size</li>
                  <li>• <strong className="text-red-300">F&B competition?</strong> → <strong className="text-emerald-300">Event-only coins</strong> - coins only work at event merchants, not outside</li>
                  <li>• <strong className="text-red-300">Peak hour chaos?</strong> → <strong className="text-emerald-300">Double coins off-peak</strong> - 2X coins during slow hours to distribute traffic</li>
                  <li>• <strong className="text-red-300">Sponsor ROI?</strong> → <strong className="text-emerald-300">Co-branded coins</strong> - &quot;Sponsor Name&quot; coins with tracked engagement</li>
                  <li>• <strong className="text-red-300">Staff theft?</strong> → <strong className="text-emerald-300">App-based logging</strong> - every transaction recorded, audit trail for all sales</li>
                  <li>• <strong className="text-red-300">Weather dependency?</strong> → <strong className="text-emerald-300">Push notifications</strong> - incentivize visits during good weather, bonus coins for rain days</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Merchant Pain Points at Events" icon={Store} defaultOpen={true}>
            <div className="space-y-4">
              <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/20">
                <h4 className="text-orange-400 font-semibold mb-2">😤 What Exhibitors/Merchants Hate</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• <strong className="text-orange-300">High booth fees, low returns</strong> - AED 50K-500K booth cost, uncertain ROI</li>
                  <li>• <strong className="text-orange-300">Tire-kickers everywhere</strong> - visitors collect brochures but don&apos;t buy</li>
                  <li>• <strong className="text-orange-300">No lead capture</strong> - can&apos;t follow up with interested visitors</li>
                  <li>• <strong className="text-orange-300">Impulse-only sales</strong> - no way to build long-term customer relationships</li>
                  <li>• <strong className="text-orange-300">Competition from neighbors</strong> - similar booths next door, no differentiation</li>
                  <li>• <strong className="text-orange-300">Cash handling hassles</strong> - card machines fail, cash theft risk</li>
                  <li>• <strong className="text-orange-300">Staff fatigue</strong> - 12-hour days lead to poor customer service</li>
                  <li>• <strong className="text-orange-300">Post-event silence</strong> - no way to re-engage interested visitors</li>
                </ul>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">✨ How Nuqta Helps Merchants</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• <strong className="text-orange-300">High booth fees?</strong> → <strong className="text-emerald-300">Pay only 5-8% on sales</strong> - no upfront cost, pay when you earn</li>
                  <li>• <strong className="text-orange-300">Tire-kickers?</strong> → <strong className="text-emerald-300">AED 500 minimum spend</strong> - visitors are motivated to buy, not browse</li>
                  <li>• <strong className="text-orange-300">No lead capture?</strong> → <strong className="text-emerald-300">Every customer logged</strong> - phone, email, purchase history captured</li>
                  <li>• <strong className="text-orange-300">Impulse-only?</strong> → <strong className="text-emerald-300">Nuqta network access</strong> - visitor becomes lifetime Nuqta user, can retarget</li>
                  <li>• <strong className="text-orange-300">Neighbor competition?</strong> → <strong className="text-emerald-300">Bonus coins for your booth</strong> - differentiate with special coin offers</li>
                  <li>• <strong className="text-orange-300">Cash hassles?</strong> → <strong className="text-emerald-300">App-based payments</strong> - all digital, no cash handling</li>
                  <li>• <strong className="text-orange-300">Staff fatigue?</strong> → <strong className="text-emerald-300">Self-service QR scanning</strong> - customers log their own purchases</li>
                  <li>• <strong className="text-orange-300">Post-event silence?</strong> → <strong className="text-emerald-300">Push notifications</strong> - reach customers even after event ends</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 3: The Pitch */}
        <div className="mb-8">
          <h2 className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-500 text-[#0a1628] flex items-center justify-center text-xs font-black">3</span>
            The Pitch
          </h2>

          <CollapsibleSection title="60-Second Elevator Pitch" icon={Zap} defaultOpen={true}>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-500/20 to-transparent rounded-xl p-4 border border-purple-500/30">
                <p className="text-white leading-relaxed">
                  &quot;Nuqta turns your event visitors into guaranteed spenders. Here&apos;s how: when someone enters your event, they get AED 100 in Event Coins. But they can only use those coins if they spend AED 500 or more at your merchants. This means every visitor is now motivated to spend more, merchants make money, and you get 10% of our commission - all with zero upfront cost. We have 500K+ existing users who are already looking for events where they can use their coins.&quot;
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                  <Wallet className="text-green-400 mx-auto mb-2" size={24} />
                  <p className="text-green-400 font-bold">500K+ Users</p>
                  <p className="text-slate-400 text-xs">Already have coins to spend</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                  <DollarSign className="text-amber-400 mx-auto mb-2" size={24} />
                  <p className="text-amber-400 font-bold">AED 0 Cost</p>
                  <p className="text-slate-400 text-xs">Zero risk pilot</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10 text-center">
                  <Timer className="text-purple-400 mx-auto mb-2" size={24} />
                  <p className="text-purple-400 font-bold">2-Week Launch</p>
                  <p className="text-slate-400 text-xs">Quick implementation</p>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="ROI Calculator (100K Visitor Event)" icon={Calculator} defaultOpen={true}>
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Existing Users */}
                <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Wallet className="text-green-400" size={18} />
                    <h4 className="text-green-400 font-bold">Existing Nuqta Users</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center mb-3">
                    <div className="bg-white/5 rounded-lg p-2">
                      <p className="text-green-400 font-bold">10K</p>
                      <p className="text-slate-500 text-xs">Already have app</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                      <p className="text-green-400 font-bold">AED 50+</p>
                      <p className="text-slate-500 text-xs">Coins in wallet</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                      <p className="text-green-400 font-bold">AED 400</p>
                      <p className="text-slate-500 text-xs">Avg spend</p>
                    </div>
                  </div>
                  <p className="text-green-400 text-sm font-semibold text-center">GMV: AED 4M</p>
                </div>

                {/* New Users */}
                <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Download className="text-purple-400" size={18} />
                    <h4 className="text-purple-400 font-bold">New Downloads</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center mb-3">
                    <div className="bg-white/5 rounded-lg p-2">
                      <p className="text-purple-400 font-bold">15K</p>
                      <p className="text-slate-500 text-xs">New registrations</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                      <p className="text-purple-400 font-bold">5K</p>
                      <p className="text-slate-500 text-xs">Spend 500+</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-2">
                      <p className="text-purple-400 font-bold">AED 600</p>
                      <p className="text-slate-500 text-xs">Avg spend</p>
                    </div>
                  </div>
                  <p className="text-purple-400 text-sm font-semibold text-center">GMV: AED 3M</p>
                </div>
              </div>

              {/* Combined Impact */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-bold text-center mb-3">Combined Impact</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-white text-xl font-black">AED 7M</p>
                    <p className="text-slate-400 text-xs">Total GMV</p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3">
                    <p className="text-emerald-400 text-xl font-black">AED 420K</p>
                    <p className="text-slate-400 text-xs">Nuqta Revenue</p>
                  </div>
                  <div className="bg-amber-500/20 rounded-lg p-3 border border-amber-500/30">
                    <p className="text-amber-400 text-xl font-black">AED 42K</p>
                    <p className="text-slate-400 text-xs">Your Share (10%)</p>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                    <p className="text-green-400 text-xl font-black">15,000</p>
                    <p className="text-slate-400 text-xs">New Users Acquired</p>
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 4: Objection Handling */}
        <div className="mb-8">
          <h2 className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-500 text-[#0a1628] flex items-center justify-center text-xs font-black">4</span>
            Objection Handling
          </h2>

          <CollapsibleSection title="10 Objections You'll Face" icon={Shield} defaultOpen={true}>
            <div className="space-y-3">
              {[
                {
                  objection: "We don't know you / You're too new",
                  response: "That's exactly why we propose a zero-risk pilot. One pavilion, one event. If it fails, you've lost nothing. If it works, you have real data to scale. Plus, we already have 500K+ users who'll see your event."
                },
                {
                  objection: "Our merchants won't pay 5-8%",
                  response: "They only pay on Nuqta-driven sales. Zero customers = zero fee. They're already paying AED 50K-500K for booth space with no guaranteed ROI. This is pay-for-performance."
                },
                {
                  objection: "Visitors won't download another app",
                  response: "They're getting AED 100 free money that expires during the event. FOMO drives downloads. Plus, 500K+ already have Nuqta - for them, it's just opening an existing app."
                },
                {
                  objection: "We tried loyalty before and it failed",
                  response: "Traditional loyalty fails because redemption is too far away. With Nuqta, visitors get coins NOW and can use them TODAY. Immediate gratification vs. far-off rewards."
                },
                {
                  objection: "We have our own app/loyalty program",
                  response: "Great! We can integrate. Let your app users earn Nuqta coins too. Double benefit for them, more data for you, and you get the 500K+ Nuqta users as bonus traffic."
                },
                {
                  objection: "What if it hurts our brand?",
                  response: "It's co-branded '[Your Event] Rewards powered by Nuqta'. You approve all messaging. Kill switch available - 7-day termination. Pilot limits exposure."
                },
                {
                  objection: "We need board/committee approval",
                  response: "Happy to prepare a board-ready proposal. Can we do a small operational pilot first to gather data? Real numbers are more convincing than projections."
                },
                {
                  objection: "Timing isn't right / Event is too soon",
                  response: "We can launch in 2 weeks. For your next event, we can sign now and prepare properly. Let's not lose another event cycle."
                },
                {
                  objection: "We want exclusivity in our category",
                  response: "We can offer category exclusivity - no competing events in the same month. You also get preferred 10% revenue share locked in as early partner."
                },
                {
                  objection: "How do we know visitors will actually spend AED 500?",
                  response: "That's the beauty - they have to! The coins are worthless unless they hit the threshold. They're literally carrying free money they can't use until they shop. That's powerful psychology."
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-red-400 text-xs font-bold">{idx + 1}</span>
                    </div>
                    <p className="text-white font-medium">&quot;{item.objection}&quot;</p>
                  </div>
                  <div className="flex items-start gap-3 ml-9">
                    <ChevronRight className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                    <p className="text-slate-300 text-sm">{item.response}</p>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 5: Sales Process */}
        <div className="mb-8">
          <h2 className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-500 text-[#0a1628] flex items-center justify-center text-xs font-black">5</span>
            Sales Process
          </h2>

          <CollapsibleSection title="Pre-Meeting Research" icon={Users} defaultOpen={true}>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-3">About the Event</h4>
                <div className="space-y-1">
                  <ChecklistItem>Event name and dates</ChecklistItem>
                  <ChecklistItem>Expected visitor count</ChecklistItem>
                  <ChecklistItem>Number of merchants/exhibitors</ChecklistItem>
                  <ChecklistItem>Ticket price (if applicable)</ChecklistItem>
                  <ChecklistItem>Previous year&apos;s performance</ChecklistItem>
                  <ChecklistItem>Current sponsors and partners</ChecklistItem>
                  <ChecklistItem>Existing loyalty/rewards programs</ChecklistItem>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">About the Decision Maker</h4>
                <div className="space-y-1">
                  <ChecklistItem>Name and exact title</ChecklistItem>
                  <ChecklistItem>LinkedIn profile reviewed</ChecklistItem>
                  <ChecklistItem>Decision-making authority level</ChecklistItem>
                  <ChecklistItem>Other stakeholders involved</ChecklistItem>
                  <ChecklistItem>Timeline for decisions</ChecklistItem>
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Discovery Questions" icon={MessageSquare}>
            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold mb-2">About Their Challenges</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>1. &quot;What&apos;s your biggest challenge in getting visitors to spend at merchant booths?&quot;</li>
                  <li>2. &quot;How do you currently track visitor spending inside the event?&quot;</li>
                  <li>3. &quot;What feedback do merchants give about their ROI?&quot;</li>
                  <li>4. &quot;What percentage of your merchants renew for the next event?&quot;</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">About Decision Process</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>5. &quot;If this looks interesting, what would the decision process look like?&quot;</li>
                  <li>6. &quot;Who else would need to be involved in evaluating this?&quot;</li>
                  <li>7. &quot;What timeline are you working with for your next event?&quot;</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Implementation Timeline" icon={Clock}>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-purple-400 font-medium py-2">Week</th>
                      <th className="text-left text-purple-400 font-medium py-2">Activities</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium text-white">Week 1</td>
                      <td className="py-2">Sign partnership, onboard merchants, configure coins</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium text-white">Week 2</td>
                      <td className="py-2">Set up booth, train staff, go live</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium text-white">During Event</td>
                      <td className="py-2">Nuqta booth, live dashboard, 24/7 support</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-white">Post-Event</td>
                      <td className="py-2">Analytics report, merchant feedback, renewal discussion</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 6: Email Templates */}
        <div className="mb-8">
          <h2 className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-500 text-[#0a1628] flex items-center justify-center text-xs font-black">6</span>
            Email Templates
          </h2>

          <CollapsibleSection title="Cold Outreach Template" icon={Mail}>
            <div className="bg-[#0a1628] rounded-lg p-4 text-slate-300 text-sm font-mono">
              <p className="text-slate-500 text-xs mb-2">Subject: Turn [Event Name] Visitors into Guaranteed Spenders</p>
              <p>Hi [Name],</p>
              <br />
              <p>I noticed [Event Name] is coming up in [month]. Quick question:</p>
              <br />
              <p>What if every visitor was motivated to spend AED 500+ at your merchants?</p>
              <br />
              <p>Nuqta is a rewards platform with 500K+ users in UAE. When visitors register at your event, they get AED 100 in Event Coins - but they can only use those coins if they spend AED 500+.</p>
              <br />
              <p>Result: Browsers become buyers. Merchants are happy. You get 10% of our revenue.</p>
              <br />
              <p>Zero cost to implement. 2-week launch. No tech integration needed.</p>
              <br />
              <p>Worth a 15-minute call?</p>
              <br />
              <p>Best,<br />[Your Name]</p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Follow-Up Cadence" icon={TrendingUp}>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left text-purple-400 font-medium py-2">Day</th>
                    <th className="text-left text-purple-400 font-medium py-2">Action</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium text-white">Day 0</td>
                    <td className="py-2">Send cold outreach email</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium text-white">Day 3</td>
                    <td className="py-2">LinkedIn connection request + message</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium text-white">Day 7</td>
                    <td className="py-2">Follow-up email with case study</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-2 font-medium text-white">Day 14</td>
                    <td className="py-2">Phone call attempt</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium text-white">Day 21</td>
                    <td className="py-2">Final &quot;closing the loop&quot; email</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 7: Event-Specific Playbooks */}
        <div className="mb-8">
          <h2 className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-500 text-[#0a1628] flex items-center justify-center text-xs font-black">7</span>
            Event-Specific Strategies
          </h2>

          <CollapsibleSection title="Global Village Strategy" icon={Globe} defaultOpen={true}>
            <div className="space-y-4">
              <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/30">
                <h4 className="text-amber-400 font-bold mb-2">🌍 Global Village (Oct - Apr)</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  <div className="text-center">
                    <p className="text-amber-400 font-bold">7M+</p>
                    <p className="text-slate-400 text-xs">Visitors/Season</p>
                  </div>
                  <div className="text-center">
                    <p className="text-amber-400 font-bold">AED 25-30</p>
                    <p className="text-slate-400 text-xs">Ticket Price</p>
                  </div>
                  <div className="text-center">
                    <p className="text-amber-400 font-bold">30+</p>
                    <p className="text-slate-400 text-xs">Pavilions</p>
                  </div>
                  <div className="text-center">
                    <p className="text-amber-400 font-bold">500+</p>
                    <p className="text-slate-400 text-xs">Merchants</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm"><strong>Pitch:</strong> &quot;Every AED 30 ticket = AED 30 in GV Coins. Unlock on AED 300+ spend. You track AED 200-400M GMV.&quot;</p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Trade Exhibition Strategy" icon={Briefcase}>
            <div className="space-y-4">
              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/30">
                <h4 className="text-blue-400 font-bold mb-2">📊 GITEX / Gulfood / ATM</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  <div className="text-center">
                    <p className="text-blue-400 font-bold">50K-200K</p>
                    <p className="text-slate-400 text-xs">Visitors</p>
                  </div>
                  <div className="text-center">
                    <p className="text-blue-400 font-bold">3-7 days</p>
                    <p className="text-slate-400 text-xs">Duration</p>
                  </div>
                  <div className="text-center">
                    <p className="text-blue-400 font-bold">AED 100</p>
                    <p className="text-slate-400 text-xs">Event Coins</p>
                  </div>
                  <div className="text-center">
                    <p className="text-blue-400 font-bold">B2B + B2C</p>
                    <p className="text-slate-400 text-xs">Audience</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm"><strong>Pitch:</strong> &quot;Exhibitors pay AED 50K-500K for booths. Give them guaranteed foot traffic that actually buys.&quot;</p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Concert & Festival Strategy" icon={Music}>
            <div className="space-y-4">
              <div className="bg-pink-500/10 rounded-xl p-4 border border-pink-500/30">
                <h4 className="text-pink-400 font-bold mb-2">🎵 Concerts & Music Festivals</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  <div className="text-center">
                    <p className="text-pink-400 font-bold">10K-100K</p>
                    <p className="text-slate-400 text-xs">Attendees</p>
                  </div>
                  <div className="text-center">
                    <p className="text-pink-400 font-bold">1-3 days</p>
                    <p className="text-slate-400 text-xs">Duration</p>
                  </div>
                  <div className="text-center">
                    <p className="text-pink-400 font-bold">AED 50-100</p>
                    <p className="text-slate-400 text-xs">Event Coins</p>
                  </div>
                  <div className="text-center">
                    <p className="text-pink-400 font-bold">F&B Heavy</p>
                    <p className="text-slate-400 text-xs">Merchant Mix</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm"><strong>Pitch:</strong> &quot;Festival-goers spend big on F&B and merch. Coins drive them to the vendors, not just the stage.&quot;</p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Sports Event Strategy" icon={Trophy}>
            <div className="space-y-4">
              <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/30">
                <h4 className="text-green-400 font-bold mb-2">🏆 Sports Events (F1, Golf, Tennis)</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  <div className="text-center">
                    <p className="text-green-400 font-bold">30K-100K</p>
                    <p className="text-slate-400 text-xs">Attendees</p>
                  </div>
                  <div className="text-center">
                    <p className="text-green-400 font-bold">1-5 days</p>
                    <p className="text-slate-400 text-xs">Duration</p>
                  </div>
                  <div className="text-center">
                    <p className="text-green-400 font-bold">Premium</p>
                    <p className="text-slate-400 text-xs">Audience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-green-400 font-bold">High AOV</p>
                    <p className="text-slate-400 text-xs">AED 500-1000</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm"><strong>Pitch:</strong> &quot;Premium audience, premium spending. Ticket price = coin value. Drive them to hospitality and retail.&quot;</p>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Seasonal Event Strategy" icon={CalendarDays}>
            <div className="space-y-4">
              <div className="bg-orange-500/10 rounded-xl p-4 border border-orange-500/30">
                <h4 className="text-orange-400 font-bold mb-2">🎄 DSF / Ramadan / Diwali Markets</h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                  <div className="text-center">
                    <p className="text-orange-400 font-bold">100K-2M</p>
                    <p className="text-slate-400 text-xs">Visitors</p>
                  </div>
                  <div className="text-center">
                    <p className="text-orange-400 font-bold">2-4 weeks</p>
                    <p className="text-slate-400 text-xs">Duration</p>
                  </div>
                  <div className="text-center">
                    <p className="text-orange-400 font-bold">Mixed</p>
                    <p className="text-slate-400 text-xs">Audience</p>
                  </div>
                  <div className="text-center">
                    <p className="text-orange-400 font-bold">Shopping</p>
                    <p className="text-slate-400 text-xs">Primary Activity</p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm"><strong>Pitch:</strong> &quot;Seasonal shoppers are already motivated. Coins make them choose YOUR market over malls.&quot;</p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 8: Power Phrases */}
        <div className="mb-8">
          <h2 className="text-purple-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-purple-500 text-[#0a1628] flex items-center justify-center text-xs font-black">8</span>
            Quick Reference
          </h2>

          <CollapsibleSection title="Power Phrases to Use" icon={Zap} defaultOpen={true}>
            <div className="space-y-2">
              {[
                'Zero cost, zero risk, all upside',
                "You don't pay unless it works",
                'Browsers become buyers',
                'Happy merchants come back next year',
                'Real data, not promises',
                '500K+ users already looking for your event',
                'AED 500 minimum = no tire-kickers',
                'Pay-for-performance, not pay-and-pray'
              ].map((phrase, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-2 border border-green-500/20">
                  <CheckCircle2 className="text-green-400 flex-shrink-0" size={16} />
                  <p className="text-white text-sm font-medium">{phrase}</p>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <h4 className="text-red-400 font-semibold mb-2">Never Say:</h4>
              <div className="space-y-2">
                {[
                  '"We guarantee X sales" (we can\'t guarantee)',
                  '"This is easy money" (sounds scammy)',
                  '"Everyone is doing this" (not true yet)',
                  '"Trust us" (show data instead)'
                ].map((phrase, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-red-500/10 rounded-lg px-3 py-2 border border-red-500/20">
                    <XCircle className="text-red-400 flex-shrink-0" size={16} />
                    <p className="text-slate-300 text-sm">{phrase}</p>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Key Stats to Remember" icon={Bookmark}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: 'Nuqta Users', value: '500K+' },
                { label: 'Event Coins (Short)', value: 'AED 100' },
                { label: 'Unlock Threshold', value: 'AED 300-500' },
                { label: 'Merchant Commission', value: '5-8%' },
                { label: 'Organizer Share', value: '10%' },
                { label: 'Launch Time', value: '2 weeks' },
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-purple-400 text-lg sm:text-xl font-bold">{stat.value}</p>
                  <p className="text-slate-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-purple-500/20 to-transparent rounded-2xl p-6 border border-purple-500/30 text-center">
          <Building2 className="text-purple-400 mx-auto mb-3" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Ready to Partner?</h3>
          <p className="text-slate-400 text-sm mb-4">Access the pitch decks and resources</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/deck-gv" className="px-4 py-2 bg-purple-500 text-white rounded-full font-semibold text-sm hover:bg-purple-600 transition-colors">
              GV Deck
            </a>
            <a href="/deck-exhibition" className="px-4 py-2 bg-white/10 text-white rounded-full font-semibold text-sm hover:bg-white/20 transition-colors">
              Exhibition Deck
            </a>
            <a href="/data-room" className="px-4 py-2 bg-white/10 text-white rounded-full font-semibold text-sm hover:bg-white/20 transition-colors">
              Data Room
            </a>
          </div>
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap gap-4 justify-center text-sm">
            <div className="flex items-center gap-2 text-slate-400">
              <Mail size={14} />
              <span>rejaul@nuqtapp.com</span>
            </div>
            <div className="flex items-center gap-2 text-slate-400">
              <Phone size={14} />
              <span>+971 50 376 4345</span>
            </div>
          </div>
        </div>

        {/* Version */}
        <p className="text-center text-slate-600 text-xs mt-8">
          Version 1.0 • Last Updated: February 2026
        </p>
      </div>
    </div>
  );
};

export default EventsPlaybook;
