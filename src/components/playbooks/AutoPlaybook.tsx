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
  XCircle,
  TrendingUp,
  Zap,
  Shield,
  DollarSign,
  BarChart3,
  Calculator,
  ArrowLeft,
  Car,
  Wrench,
  Fuel,
  Sparkles,
  UserCheck,
  Monitor,
  Camera,
  Megaphone,
  MapPin,
  Gift,
  Percent,
  Store,
  Settings,
  Gauge
} from 'lucide-react';

/**
 * CAR SERVICES & AUTO SALES PLAYBOOK
 * Complete sales guide for automotive service merchant acquisition
 *
 * Industry: Car Wash, Auto Repair, Tire Shops, Oil Change, Detailing
 * Engine: A (High Margin 40-60%)
 * Commission: 15-20%
 *
 * UAE Market Stats:
 * - 3.5M+ registered vehicles in UAE
 * - Average car service spend: AED 500-2,000/year
 * - Car wash frequency: 2-4x/month
 * - Automotive services market UAE: $3B
 * - 5,000+ auto service outlets in Dubai
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
          <div className="w-10 h-10 rounded-xl bg-slate-500/20 flex items-center justify-center">
            <Icon className="text-slate-400" size={20} />
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

const AutoPlaybook = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-slate-500/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <Link href="/merchant-playbook" className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-300 mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>All Playbooks</span>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-500/20 rounded-full mb-6">
              <Car className="text-slate-400" size={16} />
              <span className="text-slate-400 text-sm font-medium">Engine A • High Margin</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              <span className="text-slate-400">Car Services & Auto</span> Sales Playbook
            </h1>
            <p className="text-slate-400 text-lg">Complete guide to signing automotive service merchants</p>
            <p className="text-slate-500 text-sm mt-2">From Cold Outreach to Signed Contract</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'UAE Vehicles', value: '3.5M+', color: 'slate' },
            { label: 'Avg Service', value: 'AED 300', color: 'zinc' },
            { label: 'Commission', value: '15-20%', color: 'emerald' },
            { label: 'Auto Outlets', value: '5,000+', color: 'amber' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <p className="text-slate-400 text-xl font-black">{stat.value}</p>
              <p className="text-slate-500 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-32">

        {/* Part 1: Industry Overview */}
        <div className="mb-8">
          <h2 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-500 text-[#0a1628] flex items-center justify-center text-xs font-black">1</span>
            Industry Overview
          </h2>

          <CollapsibleSection title="Auto Services Market in UAE" icon={BarChart3} defaultOpen={true}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'UAE Auto Services', value: '$3B' },
                  { label: 'Registered Cars', value: '3.5M+' },
                  { label: 'Service Centers', value: '5,000+' },
                  { label: 'Car Washes', value: '2,000+' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                    <p className="text-slate-400 text-lg font-bold">{stat.value}</p>
                    <p className="text-slate-500 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-red-400 font-semibold mb-2">🇦🇪 GCC-Specific Pain Points</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• <strong className="text-red-300">5,000+ car service outlets in Dubai</strong> - brutal competition every kilometer</li>
                  <li>• <strong className="text-red-300">Customers forget service schedules</strong> - oil changes, tire rotation, AC service</li>
                  <li>• <strong className="text-red-300">60% of car wash customers are random</strong> - just pick the closest one</li>
                  <li>• <strong className="text-red-300">Summer heat punishes cars</strong> but drives customers away (June-August slowdown)</li>
                  <li>• <strong className="text-red-300">Cash transactions dominate</strong> - 40% cash, no customer data captured</li>
                  <li>• <strong className="text-red-300">Premium services sit empty</strong> - ceramic coating, PPF underutilized</li>
                  <li>• <strong className="text-red-300">WhatsApp groups undercut pricing</strong> - underground operators with no overhead</li>
                  <li>• <strong className="text-red-300">Company cars lack loyalty</strong> - drivers pick random places</li>
                  <li>• <strong className="text-red-300">Ramadan traffic drops</strong> - operational hours shift, customers stay home</li>
                  <li>• <strong className="text-red-300">Staff turnover</strong> - workers leave, take customer relationships</li>
                  <li>• <strong className="text-red-300">Aggregator apps (Careem)</strong> take commission and own the customer</li>
                </ul>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">✨ How Nuqta Solves Each Pain Point</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• <strong className="text-red-300">5,000+ competitors?</strong> → <strong className="text-emerald-300">Stand out with rewards</strong> - be the car wash where customers earn coins</li>
                  <li>• <strong className="text-red-300">Forget service schedules?</strong> → <strong className="text-emerald-300">Automated reminders</strong> - oil change due? Push notification sent automatically</li>
                  <li>• <strong className="text-red-300">60% random customers?</strong> → <strong className="text-emerald-300">Turn random into regulars</strong> - 2.5x more visits through coin rewards</li>
                  <li>• <strong className="text-red-300">Summer slowdown?</strong> → <strong className="text-emerald-300">Double coins campaigns</strong> - keep traffic coming despite the heat</li>
                  <li>• <strong className="text-red-300">40% cash, no data?</strong> → <strong className="text-emerald-300">QR scan captures everything</strong> - build database from every transaction</li>
                  <li>• <strong className="text-red-300">Premium services empty?</strong> → <strong className="text-emerald-300">Bonus coins on ceramic/PPF</strong> - incentivize upgrade from basic to deluxe</li>
                  <li>• <strong className="text-red-300">WhatsApp undercutting?</strong> → <strong className="text-emerald-300">Compete on value, not price</strong> - cashback makes you effectively cheaper</li>
                  <li>• <strong className="text-red-300">Company cars no loyalty?</strong> → <strong className="text-emerald-300">Fleet driver rewards</strong> - coins make drivers choose you consistently</li>
                  <li>• <strong className="text-red-300">Ramadan traffic drops?</strong> → <strong className="text-emerald-300">Pre-Eid car prep campaigns</strong> - target car prep before holiday</li>
                  <li>• <strong className="text-red-300">Staff turnover?</strong> → <strong className="text-emerald-300">YOU own customer data</strong> - workers leave, relationships stay</li>
                  <li>• <strong className="text-red-300">Careem takes commission?</strong> → <strong className="text-emerald-300">Own your customer</strong> - 15-20% and YOU keep the data</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 2: Target Sub-Categories */}
        <div className="mb-8">
          <h2 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-500 text-[#0a1628] flex items-center justify-center text-xs font-black">2</span>
            Target Sub-Categories
          </h2>

          <CollapsibleSection title="Auto Service Segments" icon={Car}>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: 'Car Wash', icon: Sparkles, count: '2,000+', avgSpend: 'AED 50-150', frequency: '2-4x/month' },
                { name: 'Auto Detailing', icon: Sparkles, count: '500+', avgSpend: 'AED 300-800', frequency: '2-4x/year' },
                { name: 'Oil Change/Service', icon: Wrench, count: '1,500+', avgSpend: 'AED 200-500', frequency: '3-4x/year' },
                { name: 'Tire Shops', icon: Gauge, count: '800+', avgSpend: 'AED 400-2,000', frequency: '1-2x/year' },
                { name: 'Auto Repair', icon: Settings, count: '1,200+', avgSpend: 'AED 500-3,000', frequency: 'As needed' },
                { name: 'Fuel Stations', icon: Fuel, count: '400+', avgSpend: 'AED 150-300', frequency: 'Weekly' },
              ].map((segment, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <segment.icon className="text-slate-400" size={20} />
                    <span className="text-white font-semibold">{segment.name}</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <p className="text-slate-500">Count</p>
                      <p className="text-slate-300 font-medium">{segment.count}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Avg Spend</p>
                      <p className="text-slate-300 font-medium">{segment.avgSpend}</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Frequency</p>
                      <p className="text-slate-400 font-medium">{segment.frequency}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 3: Nuqta Service Packages */}
        <div className="mb-8">
          <h2 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-500 text-[#0a1628] flex items-center justify-center text-xs font-black">3</span>
            Nuqta Service Packages
          </h2>

          <CollapsibleSection title="What Auto Services Get" icon={Gift}>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Loyalty Program', desc: 'Coins on every service - wash, oil change, repair', icon: Gift },
                { title: 'Service Reminders', desc: 'Automated notifications for scheduled maintenance', icon: Clock },
                { title: 'Premium Upsells', desc: 'Incentivize upgrades (basic to premium wash)', icon: TrendingUp },
                { title: 'Customer Database', desc: 'Build profiles even from cash customers', icon: Users },
                { title: 'Competitive Edge', desc: 'Stand out from 10+ competitors nearby', icon: Target },
                { title: 'Seasonal Campaigns', desc: 'Drive traffic during slow summer months', icon: Calendar },
                { title: 'Package Bundles', desc: 'Sell service packages with coin bonuses', icon: Gift },
                { title: 'Referral System', desc: 'Customers bring friends for bonus coins', icon: UserCheck },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10 flex gap-3">
                  <feature.icon className="text-slate-400 flex-shrink-0" size={20} />
                  <div>
                    <p className="text-white font-medium">{feature.title}</p>
                    <p className="text-slate-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 4: The 60-Second Pitch */}
        <div className="mb-8">
          <h2 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-500 text-[#0a1628] flex items-center justify-center text-xs font-black">4</span>
            The 60-Second Pitch
          </h2>

          <CollapsibleSection title="Perfect Pitch Script" icon={MessageSquare}>
            <div className="bg-gradient-to-r from-slate-500/10 to-zinc-500/10 rounded-xl p-6 border border-slate-500/30">
              <div className="space-y-4 text-slate-300">
                <p><span className="text-slate-400 font-bold">HOOK:</span> &quot;How many customers remember to come back for their next oil change on time?&quot;</p>

                <p><span className="text-slate-400 font-bold">PROBLEM:</span> &quot;Most car owners forget service schedules. They drive past 10 car washes before picking one randomly. You have no way to remind them or build loyalty with cash customers.&quot;</p>

                <p><span className="text-slate-400 font-bold">SOLUTION:</span> &quot;Nuqta turns every customer into a repeat customer. They earn coins on every service, get automated reminders, and choose you over competitors because they&apos;re building rewards.&quot;</p>

                <p><span className="text-slate-400 font-bold">PROOF:</span> &quot;Auto service centers on Nuqta see 40% increase in repeat visits and 25% higher average ticket from upsells.&quot;</p>

                <p><span className="text-slate-400 font-bold">ASK:</span> &quot;Can I show you how it would work at [Business Name]? Just needs a QR code at checkout.&quot;</p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 5: ROI Calculator */}
        <div className="mb-8">
          <h2 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-500 text-[#0a1628] flex items-center justify-center text-xs font-black">5</span>
            ROI Calculator
          </h2>

          <CollapsibleSection title="Financial Impact Example" icon={Calculator}>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">Example: Car Wash with 50 Daily Customers</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Current monthly revenue:</span>
                    <span className="text-white">AED 75,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Repeat visit increase (40%):</span>
                    <span className="text-emerald-400">+AED 30,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Premium upsell increase (25%):</span>
                    <span className="text-emerald-400">+AED 12,500</span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2">
                    <span className="text-slate-400">Total new revenue/month:</span>
                    <span className="text-emerald-400 font-bold">AED 42,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Nuqta commission (18%):</span>
                    <span className="text-amber-400">-AED 7,650</span>
                  </div>
                  <div className="flex justify-between bg-emerald-500/20 p-2 rounded-lg">
                    <span className="text-emerald-400 font-bold">Net profit increase/month:</span>
                    <span className="text-emerald-400 font-bold">AED 34,850</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-500/10 rounded-xl p-4 border border-slate-500/20">
                <p className="text-slate-400 font-semibold">Key Insight:</p>
                <p className="text-slate-300 text-sm">The average car wash customer visits 24 times per year. With loyalty rewards, they visit 34 times - that&apos;s 10 extra visits at AED 100 = AED 1,000 more per customer annually.</p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 6: Objection Handling */}
        <div className="mb-8">
          <h2 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-500 text-[#0a1628] flex items-center justify-center text-xs font-black">6</span>
            Objection Handling
          </h2>

          <CollapsibleSection title="Common Objections & Responses" icon={Shield}>
            <div className="space-y-3">
              {[
                { objection: 'My customers always come back anyway', response: 'Do they though? Industry data shows 60% of car wash customers are random. With Nuqta, you convert random visitors into regulars.' },
                { objection: 'We already give loyalty stamps', response: 'Paper cards have 80% abandonment rate - they get lost. Digital loyalty in their phone is always there, always reminding them.' },
                { objection: '15-20% is too much margin to give', response: 'You only pay on NEW revenue. If someone was coming anyway, no commission. We drive incremental visits you wouldn\'t have.' },
                { objection: 'My business is cash-only', response: 'Perfect! Cash businesses struggle to track customers. With Nuqta QR, you build a customer database even from cash payments.' },
                { objection: 'Car wash is a commodity, people just pick closest', response: 'Exactly why you need differentiation. When customers have coins building at your wash, they\'ll drive past competitors.' },
                { objection: 'Summer is slow anyway, nothing can help', response: 'Summer campaigns with double coins can actually drive traffic. People still need car washes, they just need extra incentive.' },
                { objection: 'My workers can\'t handle another system', response: 'One QR code. Customer scans, done. 30 seconds of training. We provide table tents, stickers, everything.' },
                { objection: 'We already discount for regulars', response: 'Discounts cut your margin immediately. Coins cost you nothing until redeemed, and drive the behavior you want first.' },
                { objection: 'What if customers never redeem coins?', response: 'Even better for you! But actually, redemption drives engagement. A customer redeeming is a customer returning.' },
                { objection: 'We\'re in an industrial area, not residential', response: 'Company cars and fleet vehicles are even better - predictable, high-frequency. We can help with corporate accounts.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-red-400 font-medium mb-2">&quot;{item.objection}&quot;</p>
                  <p className="text-slate-300 text-sm">→ {item.response}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 7: Competitor Landscape */}
        <div className="mb-8">
          <h2 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-500 text-[#0a1628] flex items-center justify-center text-xs font-black">7</span>
            Competitor Landscape
          </h2>

          <CollapsibleSection title="What Auto Services Use Today" icon={Target}>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'Paper Stamp Cards', weakness: 'Customers lose them, no data', nuqtaAdvantage: 'Digital tracking, never lost' },
                  { name: 'WhatsApp Reminders', weakness: 'Manual, no automation', nuqtaAdvantage: 'Automatic service reminders' },
                  { name: 'Google Ads', weakness: 'Pay per click, no guarantee', nuqtaAdvantage: 'Pay only on actual service' },
                  { name: 'Aggregator Apps (Careem)', weakness: 'They own the customer', nuqtaAdvantage: 'You own your customer data' },
                ].map((comp, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-white font-semibold mb-1">{comp.name}</p>
                    <p className="text-red-400 text-xs mb-2">Weakness: {comp.weakness}</p>
                    <p className="text-emerald-400 text-xs">Our Edge: {comp.nuqtaAdvantage}</p>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 8: Discovery Questions */}
        <div className="mb-8">
          <h2 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-500 text-[#0a1628] flex items-center justify-center text-xs font-black">8</span>
            Discovery Questions
          </h2>

          <CollapsibleSection title="Questions to Uncover Pain Points" icon={MessageSquare}>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'How many cars do you service per day on average?',
                'What percentage of customers return within 3 months?',
                'How do you remind customers about oil changes?',
                'What is your busiest day? Slowest day?',
                'Do most customers pay cash or card?',
                'How many competitors are within 2km?',
                'Do you offer premium packages? What % buy them?',
                'How do you currently attract new customers?',
                'What is your average ticket size?',
                'Do you have corporate/fleet accounts?',
              ].map((question, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-white/5 rounded-lg p-3 border border-white/10">
                  <span className="text-slate-400 font-bold text-sm">{idx + 1}.</span>
                  <p className="text-slate-300 text-sm">{question}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 9: Pre-Meeting Checklist */}
        <div className="mb-8">
          <h2 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-500 text-[#0a1628] flex items-center justify-center text-xs font-black">9</span>
            Pre-Meeting Checklist
          </h2>

          <CollapsibleSection title="Research Checklist" icon={Users}>
            <div className="space-y-2">
              <ChecklistItem>Check Google reviews and ratings</ChecklistItem>
              <ChecklistItem>Look up their service menu and prices</ChecklistItem>
              <ChecklistItem>Count competitors within 3km radius</ChecklistItem>
              <ChecklistItem>Identify if they have any existing loyalty</ChecklistItem>
              <ChecklistItem>Check if they&apos;re part of a chain or independent</ChecklistItem>
              <ChecklistItem>Note their busiest and slowest times</ChecklistItem>
              <ChecklistItem>Prepare ROI calculator with their prices</ChecklistItem>
              <ChecklistItem>Bring sample QR materials and stickers</ChecklistItem>
              <ChecklistItem>Have 2-3 similar business case studies ready</ChecklistItem>
              <ChecklistItem>Know their payment methods (cash/card)</ChecklistItem>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Materials to Prepare" icon={FileText}>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { item: 'Auto Services Deck', desc: 'With their branding' },
                { item: 'ROI Calculator', desc: 'Pre-filled with their prices' },
                { item: 'Counter Stickers', desc: 'Sample for their payment area' },
                { item: 'Case Studies', desc: '2-3 similar auto service wins' },
                { item: 'Contract Template', desc: 'Ready for signature' },
                { item: 'Demo Phone', desc: 'Show app with mockup' },
              ].map((material, idx) => (
                <div key={idx} className="bg-white/5 rounded-lg p-3 border border-white/10">
                  <p className="text-white font-medium text-sm">{material.item}</p>
                  <p className="text-slate-400 text-xs">{material.desc}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 10: Closing Scripts */}
        <div className="mb-8">
          <h2 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-500 text-[#0a1628] flex items-center justify-center text-xs font-black">10</span>
            Closing Scripts
          </h2>

          <CollapsibleSection title="Closing the Deal" icon={Target}>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">The Assumptive Close</h4>
                <p className="text-slate-300 text-sm italic">&quot;Great, let&apos;s get you set up. Should we put the QR sticker by your cash register or at the entrance where customers wait?&quot;</p>
              </div>
              <div className="bg-gradient-to-r from-slate-500/10 to-gray-500/10 rounded-xl p-4 border border-slate-500/20">
                <h4 className="text-slate-400 font-semibold mb-2">The Pilot Close</h4>
                <p className="text-slate-300 text-sm italic">&quot;Let&apos;s start with just your car wash for 30 days. When you see customers coming back more often, we&apos;ll add detailing and other services.&quot;</p>
              </div>
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-4 border border-amber-500/20">
                <h4 className="text-amber-400 font-semibold mb-2">The ROI Close</h4>
                <p className="text-slate-300 text-sm italic">&quot;Based on your 50 cars per day, you&apos;ll see AED 12,000 extra monthly from repeat customers and premium upsells. The contract just needs your signature.&quot;</p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 11: Onboarding Timeline */}
        <div className="mb-8">
          <h2 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-500 text-[#0a1628] flex items-center justify-center text-xs font-black">11</span>
            Onboarding Timeline
          </h2>

          <CollapsibleSection title="From Signature to Live" icon={Calendar}>
            <div className="space-y-3">
              {[
                { day: 'Day 1', task: 'Contract signed, trade license collected', owner: 'BDA' },
                { day: 'Day 2', task: 'System setup, service menu digitized', owner: 'Operations' },
                { day: 'Day 3-4', task: 'Photos of facility and services', owner: 'Content Team' },
                { day: 'Day 5', task: 'Staff training (cashier + service advisors)', owner: 'Account Manager' },
                { day: 'Day 5', task: 'QR stickers installed at payment counter', owner: 'Account Manager' },
                { day: 'Day 6-7', task: 'Profile review and launch', owner: 'Operations' },
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="bg-slate-500/20 px-3 py-1 rounded-full">
                    <span className="text-slate-400 text-sm font-bold">{step.day}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm">{step.task}</p>
                  </div>
                  <div className="text-slate-400 text-xs">{step.owner}</div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 12: Follow-Up Sequence */}
        <div className="mb-8">
          <h2 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-500 text-[#0a1628] flex items-center justify-center text-xs font-black">12</span>
            Follow-Up Sequence
          </h2>

          <CollapsibleSection title="If Not Closed on Spot" icon={TrendingUp}>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">5-Day Follow-Up Sequence</h4>
                <div className="space-y-2">
                  {[
                    { day: 'Same Day', action: 'WhatsApp thank you + deck attachment', channel: 'WhatsApp' },
                    { day: 'Day 2', action: 'Share competitor success story', channel: 'WhatsApp' },
                    { day: 'Day 3', action: 'Call to address concerns', channel: 'Phone' },
                    { day: 'Day 5', action: 'Final push with limited-time offer', channel: 'WhatsApp' },
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <span className="text-slate-400 font-medium w-20">{step.day}</span>
                      <span className="text-slate-300 flex-1">{step.action}</span>
                      <span className="text-slate-500 text-xs">{step.channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 13: Key Stats */}
        <div className="mb-8">
          <h2 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-500 text-[#0a1628] flex items-center justify-center text-xs font-black">13</span>
            Key Stats to Remember
          </h2>

          <CollapsibleSection title="Auto Industry Quick Facts" icon={Bookmark}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { stat: '3.5M+', label: 'Vehicles in UAE' },
                { stat: '$3B', label: 'Auto Services Market' },
                { stat: '5,000+', label: 'Service Centers' },
                { stat: 'AED 150', label: 'Avg Car Wash' },
                { stat: 'AED 350', label: 'Avg Detailing' },
                { stat: '4x/year', label: 'Wash Frequency' },
                { stat: '40%', label: 'Pay Cash' },
                { stat: '<30%', label: 'Repeat Rate' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-slate-400 text-xl font-bold">{item.stat}</p>
                  <p className="text-slate-400 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 14: Power Phrases */}
        <div className="mb-8">
          <h2 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-500 text-[#0a1628] flex items-center justify-center text-xs font-black">14</span>
            Power Phrases
          </h2>

          <CollapsibleSection title="What to Say (and Avoid)" icon={Megaphone}>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                  <CheckCircle2 size={16} />
                  Power Phrases
                </h4>
                {[
                  'Turn drive-by into drive-back',
                  'Service reminders that actually work',
                  'Compete on loyalty, not just location',
                  'Build a database from cash customers',
                  'Premium upgrades sell themselves',
                  'The car wash they won\'t skip'
                ].map((phrase, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-2 border border-green-500/20 mb-2">
                    <CheckCircle2 className="text-green-400 flex-shrink-0" size={16} />
                    <p className="text-white text-sm font-medium">{phrase}</p>
                  </div>
                ))}
              </div>
              <div>
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <XCircle size={16} />
                  Avoid Saying
                </h4>
                {[
                  '"We\'ll bring you tons of customers"',
                  '"Your stamp cards don\'t work"',
                  '"Everyone uses us"',
                  '"It\'s free money"',
                  '"Just put the QR anywhere"',
                  '"Discount your services"'
                ].map((phrase, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-red-500/10 rounded-lg px-3 py-2 border border-red-500/20 mb-2">
                    <XCircle className="text-red-400 flex-shrink-0" size={16} />
                    <p className="text-slate-300 text-sm">{phrase}</p>
                  </div>
                ))}
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 15: Marketing Campaigns Section */}
        <div className="mb-8">
          <h2 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-500 text-[#0a1628] flex items-center justify-center text-xs font-black">15</span>
            Marketing Campaigns
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Merchant Acquisition Campaign */}
            <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl p-6 border border-emerald-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/30 flex items-center justify-center">
                  <Store className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Merchant Acquisition</h3>
                  <p className="text-emerald-400 text-sm">How to onboard auto service merchants</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Battle-tested campaigns to sign car washes, detailing shops, and auto repair centers.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Industrial area blitz campaigns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Car wash chain partnerships</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Auto mall presence events</span>
                </div>
              </div>
              <Link
                href="/marketing-war-room?tab=merchant-campaigns"
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-lg font-semibold text-sm hover:bg-emerald-600 transition-colors"
              >
                <Megaphone size={16} />
                View Merchant Campaigns
              </Link>
            </div>

            {/* User Acquisition Campaign */}
            <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/30 flex items-center justify-center">
                  <Users className="text-purple-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">User Acquisition</h3>
                  <p className="text-purple-400 text-sm">How to bring car owners to services</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Viral campaigns to drive car owners. Service reminders, summer specials, and referral programs.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Summer car care campaigns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Service reminder notifications</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Eid car prep specials</span>
                </div>
              </div>
              <Link
                href="/marketing-war-room?tab=user-campaigns"
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded-lg font-semibold text-sm hover:bg-purple-600 transition-colors"
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
                <p className="text-2xl font-bold text-slate-400">5</p>
                <p className="text-xs text-slate-500">Merchant Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">6</p>
                <p className="text-xs text-slate-500">User Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-zinc-400">AED 300</p>
                <p className="text-xs text-slate-500">Avg Transaction</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#c9a227]">40%</p>
                <p className="text-xs text-slate-500">Repeat Lift Target</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-slate-500/20 to-transparent rounded-2xl p-6 border border-slate-500/30 text-center">
          <Car className="text-slate-400 mx-auto mb-3" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Ready for the Meeting?</h3>
          <p className="text-slate-400 text-sm mb-4">Access the pitch deck and other materials</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/deck-merchant" className="px-4 py-2 bg-slate-500 text-white rounded-full font-semibold text-sm hover:bg-slate-600 transition-colors">
              View Auto Deck
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
          Car Services & Auto Playbook v1.0 • Last Updated: February 2026
        </p>
      </div>
    </div>
  );
};

export default AutoPlaybook;
