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
  Hotel,
  Bed,
  Utensils,
  Sparkles,
  UserCheck,
  Monitor,
  Camera,
  Megaphone,
  MapPin,
  Gift,
  Percent,
  Store,
  Star,
  Coffee,
  Waves
} from 'lucide-react';

/**
 * HOTELS & HOSPITALITY SALES PLAYBOOK
 * Complete sales guide for hotel/hospitality merchant acquisition
 *
 * Industry: Hotels, Resorts, Serviced Apartments, Hotel F&B, Spas
 * Engine: A (High Margin 60-75%)
 * Commission: 15-20%
 *
 * UAE Market Stats:
 * - Average hotel room rate: AED 400-800/night
 * - Average F&B spend per guest: AED 150-300
 * - Hotel occupancy rate UAE: 73-78%
 * - Hospitality market size UAE: $12B
 * - 700+ hotels in Dubai alone
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
          <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center">
            <Icon className="text-blue-400" size={20} />
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

const HotelPlaybook = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-blue-500/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <Link href="/merchant-playbook" className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>All Playbooks</span>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full mb-6">
              <Hotel className="text-blue-400" size={16} />
              <span className="text-blue-400 text-sm font-medium">Engine A • High Margin</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              <span className="text-blue-400">Hotels & Hospitality</span> Sales Playbook
            </h1>
            <p className="text-slate-400 text-lg">Complete guide to signing hotel & resort merchants</p>
            <p className="text-slate-500 text-sm mt-2">From Cold Outreach to Signed Contract</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Avg Room Rate', value: 'AED 600', color: 'blue' },
            { label: 'Avg F&B Spend', value: 'AED 200', color: 'cyan' },
            { label: 'Commission', value: '15-20%', color: 'emerald' },
            { label: 'Dubai Hotels', value: '700+', color: 'amber' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <p className="text-blue-400 text-xl font-black">{stat.value}</p>
              <p className="text-slate-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-32">

        {/* Part 1: Industry Overview */}
        <div className="mb-8">
          <h2 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-[#0a1628] flex items-center justify-center text-xs font-black">1</span>
            Industry Overview
          </h2>

          <CollapsibleSection title="Hospitality Market in UAE" icon={BarChart3} defaultOpen={true}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'UAE Hospitality', value: '$12B' },
                  { label: 'Dubai Hotels', value: '700+' },
                  { label: 'Annual Visitors', value: '17M+' },
                  { label: 'Avg Occupancy', value: '73-78%' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                    <p className="text-blue-400 text-lg font-bold">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-red-400 font-semibold mb-2">🇦🇪 GCC-Specific Pain Points</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• <strong className="text-red-300">OTAs take 15-25% commission</strong> on every room booking (Booking.com, Expedia)</li>
                  <li>• <strong className="text-red-300">No guest relationship</strong> after checkout - OTAs own the customer data</li>
                  <li>• <strong className="text-red-300">F&B outlets 80% dependent</strong> on in-house guests - locals don&apos;t come</li>
                  <li>• <strong className="text-red-300">Spa sits empty weekdays</strong> - 60% utilization only Fri-Sat</li>
                  <li>• <strong className="text-red-300">700+ hotels in Dubai alone</strong> - fierce competition for every booking</li>
                  <li>• <strong className="text-red-300">Summer occupancy drops 20-30%</strong> as tourists avoid heat</li>
                  <li>• <strong className="text-red-300">Friday brunch competition</strong> - 100+ hotels fighting for same customers</li>
                  <li>• <strong className="text-red-300">Pool/beach day pass revenue</strong> untapped from local residents</li>
                  <li>• <strong className="text-red-300">Entertainer app trained guests</strong> to expect 50% off - destroys margins</li>
                  <li>• <strong className="text-red-300">Repeat guest rate below 20%</strong> for non-chain hotels</li>
                  <li>• <strong className="text-red-300">Corporate travel contracts</strong> squeeze margins to minimum</li>
                  <li>• <strong className="text-red-300">Guest acquisition cost AED 100-300</strong> per booking through ads</li>
                </ul>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">✨ How Nuqta Solves Each Pain Point</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• <strong className="text-red-300">OTAs take 15-25%?</strong> → <strong className="text-emerald-300">15-20% on F&B/spa only</strong> - not rooms, and you own the guest relationship</li>
                  <li>• <strong className="text-red-300">No guest relationship?</strong> → <strong className="text-emerald-300">Build direct database</strong> - guests scan QR, you own their data forever</li>
                  <li>• <strong className="text-red-300">F&B 80% in-house only?</strong> → <strong className="text-emerald-300">500K+ locals discovering your restaurant</strong> - 25% increase in walk-ins</li>
                  <li>• <strong className="text-red-300">Spa empty weekdays?</strong> → <strong className="text-emerald-300">Double coins on Tue-Wed</strong> - fill slow slots, 40% better utilization</li>
                  <li>• <strong className="text-red-300">700+ hotels competing?</strong> → <strong className="text-emerald-300">Stand out with rewards</strong> - be the hotel where guests earn coins</li>
                  <li>• <strong className="text-red-300">Summer occupancy drops?</strong> → <strong className="text-emerald-300">Local F&B traffic</strong> - residents spend on dining even when tourists leave</li>
                  <li>• <strong className="text-red-300">Friday brunch competition?</strong> → <strong className="text-emerald-300">Target food enthusiasts</strong> - push notifications to brunch lovers</li>
                  <li>• <strong className="text-red-300">Day pass revenue untapped?</strong> → <strong className="text-emerald-300">Pool/beach campaigns</strong> - promote to local residents</li>
                  <li>• <strong className="text-red-300">Entertainer trained 50% off?</strong> → <strong className="text-emerald-300">Cashback preserves pricing</strong> - no discounts, maintain rate integrity</li>
                  <li>• <strong className="text-red-300">Repeat rate below 20%?</strong> → <strong className="text-emerald-300">Multi-outlet loyalty</strong> - coins across restaurant, spa, bar drives returns</li>
                  <li>• <strong className="text-red-300">Corporate squeezes margins?</strong> → <strong className="text-emerald-300">Target leisure travelers</strong> - higher margin guests through Nuqta</li>
                  <li>• <strong className="text-red-300">AED 100-300 per booking?</strong> → <strong className="text-emerald-300">Pay only on F&B spend</strong> - no acquisition cost upfront</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 2: Target Sub-Categories */}
        <div className="mb-8">
          <h2 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-[#0a1628] flex items-center justify-center text-xs font-black">2</span>
            Target Sub-Categories
          </h2>

          <CollapsibleSection title="Hospitality Segments" icon={Bed}>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: '5-Star Hotels', icon: Star, count: '100+', avgSpend: 'AED 1,500/stay', opportunity: 'F&B, Spa, Pool' },
                { name: '4-Star Hotels', icon: Hotel, count: '200+', avgSpend: 'AED 800/stay', opportunity: 'Restaurant, Bar' },
                { name: '3-Star Hotels', icon: Bed, count: '300+', avgSpend: 'AED 400/stay', opportunity: 'Cafe, Services' },
                { name: 'Serviced Apartments', icon: MapPin, count: '150+', avgSpend: 'AED 300/night', opportunity: 'Long-stay perks' },
                { name: 'Hotel Restaurants', icon: Utensils, count: '500+', avgSpend: 'AED 250/meal', opportunity: 'Non-guest traffic' },
                { name: 'Hotel Spas', icon: Waves, count: '200+', avgSpend: 'AED 400/visit', opportunity: 'Weekday slots' },
              ].map((segment, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <segment.icon className="text-blue-400" size={20} />
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
                      <p className="text-slate-500">Opportunity</p>
                      <p className="text-blue-400 font-medium">{segment.opportunity}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 3: Nuqta Service Packages */}
        <div className="mb-8">
          <h2 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-[#0a1628] flex items-center justify-center text-xs font-black">3</span>
            Nuqta Service Packages
          </h2>

          <CollapsibleSection title="What Hotels Get" icon={Gift}>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Guest Loyalty Program', desc: 'Coins on all F&B, spa, and amenity spend', icon: Gift },
                { title: 'Walk-in Traffic', desc: 'Locals discover hotel restaurants on Nuqta app', icon: Users },
                { title: 'Spa/Gym Utilization', desc: 'Fill off-peak slots with reward incentives', icon: Sparkles },
                { title: 'Direct Bookings', desc: 'Bypass OTAs with loyalty-driven direct guests', icon: Bed },
                { title: 'Guest Data & Insights', desc: 'Know your guests better than OTAs do', icon: BarChart3 },
                { title: 'Multi-Outlet Integration', desc: 'One loyalty across restaurant, spa, pool bar', icon: Hotel },
                { title: 'Corporate Partnerships', desc: 'Attract business travelers with company perks', icon: Target },
                { title: 'Event & MICE Support', desc: 'Loyalty for conference and event attendees', icon: Calendar },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10 flex gap-3">
                  <feature.icon className="text-blue-400 flex-shrink-0" size={20} />
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
          <h2 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-[#0a1628] flex items-center justify-center text-xs font-black">4</span>
            The 60-Second Pitch
          </h2>

          <CollapsibleSection title="Perfect Pitch Script" icon={MessageSquare}>
            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-6 border border-blue-500/30">
              <div className="space-y-4 text-slate-300">
                <p><span className="text-blue-400 font-bold">HOOK:</span> &quot;What percentage of your restaurant revenue comes from non-hotel guests?&quot;</p>

                <p><span className="text-blue-400 font-bold">PROBLEM:</span> &quot;Most hotel F&B outlets rely 80% on in-house guests. That&apos;s leaving money on the table. Plus, OTAs take 20-25% and own your guest relationship.&quot;</p>

                <p><span className="text-blue-400 font-bold">SOLUTION:</span> &quot;Nuqta is a loyalty platform that brings locals to your restaurant, fills your spa slots on weekdays, and builds direct guest relationships - all while you only pay 15-20% on actual spend.&quot;</p>

                <p><span className="text-blue-400 font-bold">PROOF:</span> &quot;Hotels on Nuqta see 25% increase in F&B walk-ins and 40% better spa utilization within 3 months.&quot;</p>

                <p><span className="text-blue-400 font-bold">ASK:</span> &quot;Can I show you how [Hotel Name]&apos;s outlets would look on our app? Takes 10 minutes.&quot;</p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 5: ROI Calculator */}
        <div className="mb-8">
          <h2 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-[#0a1628] flex items-center justify-center text-xs font-black">5</span>
            ROI Calculator
          </h2>

          <CollapsibleSection title="Financial Impact Example" icon={Calculator}>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">Example: 4-Star Hotel with 200 Rooms</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Current F&B walk-in revenue/month:</span>
                    <span className="text-white">AED 150,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Nuqta-driven increase (25%):</span>
                    <span className="text-emerald-400">+AED 37,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Spa utilization increase (40%):</span>
                    <span className="text-emerald-400">+AED 20,000</span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2">
                    <span className="text-slate-400">Total new revenue/month:</span>
                    <span className="text-emerald-400 font-bold">AED 57,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Nuqta commission (18%):</span>
                    <span className="text-amber-400">-AED 10,350</span>
                  </div>
                  <div className="flex justify-between bg-emerald-500/20 p-2 rounded-lg">
                    <span className="text-emerald-400 font-bold">Net profit increase/month:</span>
                    <span className="text-emerald-400 font-bold">AED 47,150</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                <p className="text-blue-400 font-semibold">Key Insight:</p>
                <p className="text-slate-300 text-sm">Hotels pay OTAs 20-25% on room bookings. Nuqta charges 15-20% only on incremental F&B and amenity spend - revenue they wouldn&apos;t have otherwise.</p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 6: Objection Handling */}
        <div className="mb-8">
          <h2 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-[#0a1628] flex items-center justify-center text-xs font-black">6</span>
            Objection Handling
          </h2>

          <CollapsibleSection title="Common Objections & Responses" icon={Shield}>
            <div className="space-y-3">
              {[
                { objection: 'We already have a loyalty program', response: 'Great! Nuqta complements your existing program by bringing NEW guests who discover you on our app. Your program retains them, we acquire them.' },
                { objection: 'We work with OTAs for bookings', response: 'OTAs are for rooms. Nuqta is for F&B and amenities - incremental revenue from locals who may never stay but will dine and spa.' },
                { objection: '15-20% commission is too high', response: 'You pay OTAs 25% on rooms. We charge 15-20% only on NEW F&B revenue you wouldn\'t have otherwise. Zero commission on existing guests.' },
                { objection: 'Our restaurant is always full', response: 'What about Tuesday lunch? Thursday afternoon spa? We help fill the 30% of capacity that sits empty during off-peak.' },
                { objection: 'We need corporate approval', response: 'Understood. We can start with just your restaurant as a pilot. Results speak - corporate will notice the 25% revenue lift.' },
                { objection: 'We tried loyalty apps before', response: 'Traditional loyalty fails because guests forget. Nuqta users actively search for places to earn coins. They come looking for you.' },
                { objection: 'Our guests are tourists, not locals', response: 'Perfect! Nuqta users include 500K+ residents looking for staycation experiences. Your pool day pass or Friday brunch is their weekend plan.' },
                { objection: 'Integration with our PMS is complex', response: 'No PMS integration needed. We use simple QR scan at point of sale. Training takes 15 minutes.' },
                { objection: 'What about our spa membership holders?', response: 'They continue as normal. Nuqta targets non-members - the 80% of residents who\'ve never visited your spa.' },
                { objection: 'Our F&M director needs to approve', response: 'Happy to present to your F&M director. We have case studies from similar properties they\'ll find compelling.' },
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
          <h2 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-[#0a1628] flex items-center justify-center text-xs font-black">7</span>
            Competitor Landscape
          </h2>

          <CollapsibleSection title="What Hotels Use Today" icon={Target}>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'OTAs (Booking, Expedia)', weakness: '20-25% commission, no guest data ownership', nuqtaAdvantage: 'We complement rooms with F&B, pay only 15-20%' },
                  { name: 'Hotel Loyalty Programs', weakness: 'Only for chain hotels, complex to manage', nuqtaAdvantage: 'Works for any hotel, zero tech setup' },
                  { name: 'The Entertainer', weakness: '50% discounts destroy margins', nuqtaAdvantage: 'Cashback preserves pricing integrity' },
                  { name: 'Instagram Ads', weakness: 'No guarantee of bookings', nuqtaAdvantage: 'Pay only when guests actually spend' },
                ].map((comp, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-white font-semibold mb-1">{comp.name}</p>
                    <p className="text-red-400 text-xs mb-2">Weakness: {comp.weakness}</p>
                    <p className="text-emerald-400 text-xs">Our Edge: {comp.nuqtaAdvantage}</p>
                  </div>
                ))}
              </div>
              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                <p className="text-blue-400 font-semibold mb-2">Hotels Already on Nuqta:</p>
                <p className="text-slate-300 text-sm">Show them which competing hotels are already benefiting from Nuqta. &quot;Jumeirah restaurants are seeing 25% more walk-ins. Would you like similar results?&quot;</p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 8: Discovery Questions */}
        <div className="mb-8">
          <h2 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-[#0a1628] flex items-center justify-center text-xs font-black">8</span>
            Discovery Questions
          </h2>

          <CollapsibleSection title="Questions to Uncover Pain Points" icon={MessageSquare}>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'What % of your restaurant revenue comes from non-hotel guests?',
                'How is your spa utilization on weekdays vs weekends?',
                'What commission do you pay OTAs on room bookings?',
                'Do you have a loyalty program? How many active members?',
                'What is your repeat guest rate?',
                'How do you currently attract locals to your F&B outlets?',
                'What is your cost per acquisition for new diners?',
                'Which days/times are your restaurants slowest?',
                'Do guests use your spa and gym facilities?',
                'How do you compete with standalone restaurants nearby?',
              ].map((question, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-white/5 rounded-lg p-3 border border-white/10">
                  <span className="text-blue-400 font-bold text-sm">{idx + 1}.</span>
                  <p className="text-slate-300 text-sm">{question}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 9: Pre-Meeting Checklist */}
        <div className="mb-8">
          <h2 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-[#0a1628] flex items-center justify-center text-xs font-black">9</span>
            Pre-Meeting Checklist
          </h2>

          <CollapsibleSection title="Research Checklist" icon={Users}>
            <div className="space-y-2">
              <ChecklistItem>Research hotel&apos;s TripAdvisor and Google reviews</ChecklistItem>
              <ChecklistItem>Check their restaurant menus and pricing online</ChecklistItem>
              <ChecklistItem>Look up their spa services and rates</ChecklistItem>
              <ChecklistItem>Identify their slowest days (usually Sun-Tue)</ChecklistItem>
              <ChecklistItem>Find the F&B Director or GM on LinkedIn</ChecklistItem>
              <ChecklistItem>Check if they have existing loyalty program</ChecklistItem>
              <ChecklistItem>Prepare 3 similar hotel case studies</ChecklistItem>
              <ChecklistItem>Have ROI calculator ready with their price points</ChecklistItem>
              <ChecklistItem>Screenshot how competitors appear on Nuqta</ChecklistItem>
              <ChecklistItem>Bring printed QR materials for demo</ChecklistItem>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Materials to Prepare" icon={FileText}>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { item: 'Hotel Pitch Deck', desc: 'Customized with their branding' },
                { item: 'ROI Calculator', desc: 'Pre-filled with their price points' },
                { item: 'Sample QR Materials', desc: 'Table tent and sticker mockups' },
                { item: 'Case Studies', desc: '2-3 similar hotel success stories' },
                { item: 'Contract Template', desc: 'Ready for signature' },
                { item: 'Demo Phone', desc: 'Show app with hotel mockup' },
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
          <h2 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-[#0a1628] flex items-center justify-center text-xs font-black">10</span>
            Closing Scripts
          </h2>

          <CollapsibleSection title="Closing the Deal" icon={Target}>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">The Assumptive Close</h4>
                <p className="text-slate-300 text-sm italic">&quot;Great, so we&apos;ll start with your main restaurant and spa. Should we schedule the content shoot for next week, or would the week after work better for your team?&quot;</p>
              </div>
              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl p-4 border border-blue-500/20">
                <h4 className="text-blue-400 font-semibold mb-2">The Pilot Close</h4>
                <p className="text-slate-300 text-sm italic">&quot;I understand you want to see results before full commitment. Let&apos;s start with just your lobby cafe for 30 days. When you see the 25% traffic increase, we&apos;ll add the other outlets.&quot;</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20">
                <h4 className="text-purple-400 font-semibold mb-2">The Competition Close</h4>
                <p className="text-slate-300 text-sm italic">&quot;[Competitor Hotel] just signed last week and their brunch is going to get featured to 500K users. Would you like to be in the same feature?&quot;</p>
              </div>
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-4 border border-amber-500/20">
                <h4 className="text-amber-400 font-semibold mb-2">The ROI Close</h4>
                <p className="text-slate-300 text-sm italic">&quot;Based on your current F&B revenue, you&apos;ll see AED 47,000 net profit increase per month. That&apos;s AED 564,000 per year. The contract just needs your signature to get started.&quot;</p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 11: Onboarding Timeline */}
        <div className="mb-8">
          <h2 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-[#0a1628] flex items-center justify-center text-xs font-black">11</span>
            Onboarding Timeline
          </h2>

          <CollapsibleSection title="From Signature to Live" icon={Calendar}>
            <div className="space-y-3">
              {[
                { day: 'Day 1', task: 'Contract signed, trade license collected', owner: 'BDA' },
                { day: 'Day 2-3', task: 'System setup, outlet profiles created', owner: 'Operations' },
                { day: 'Day 4-5', task: 'Content shoot scheduled and completed', owner: 'Content Team' },
                { day: 'Day 6-7', task: 'Staff training (restaurant + spa)', owner: 'Account Manager' },
                { day: 'Day 7', task: 'QR materials installed at all outlets', owner: 'Account Manager' },
                { day: 'Day 8-10', task: 'Profile review and launch prep', owner: 'Operations' },
                { day: 'Day 10-14', task: 'Soft launch, monitor first transactions', owner: 'Account Manager' },
                { day: 'Day 14+', task: 'Full launch, featured in app', owner: 'Marketing' },
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="bg-blue-500/20 px-3 py-1 rounded-full">
                    <span className="text-blue-400 text-sm font-bold">{step.day}</span>
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

        {/* Part 12: If Not Closed on Spot */}
        <div className="mb-8">
          <h2 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-[#0a1628] flex items-center justify-center text-xs font-black">12</span>
            Follow-Up Sequence
          </h2>

          <CollapsibleSection title="If Not Closed on Spot" icon={TrendingUp}>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">7-Day Follow-Up Sequence</h4>
                <div className="space-y-2">
                  {[
                    { day: 'Same Day', action: 'Send thank you email with deck + ROI calculator', channel: 'Email' },
                    { day: 'Day 2', action: 'WhatsApp: "Did you get a chance to review the proposal?"', channel: 'WhatsApp' },
                    { day: 'Day 3', action: 'Share a competitor success story', channel: 'Email' },
                    { day: 'Day 5', action: 'Call to address any questions', channel: 'Phone' },
                    { day: 'Day 7', action: 'Final push: "We have a slot this week for content shoot"', channel: 'WhatsApp' },
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <span className="text-blue-400 font-medium w-20">{step.day}</span>
                      <span className="text-slate-300 flex-1">{step.action}</span>
                      <span className="text-slate-500 text-xs">{step.channel}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20">
                <h4 className="text-amber-400 font-semibold mb-2">If Still Not Closed After 7 Days</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• Move to monthly nurture sequence</li>
                  <li>• Add to newsletter for industry updates</li>
                  <li>• Revisit when new hotel in their area signs</li>
                  <li>• Re-approach before major seasons (summer, holidays)</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 13: Key Stats */}
        <div className="mb-8">
          <h2 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-[#0a1628] flex items-center justify-center text-xs font-black">13</span>
            Key Stats to Remember
          </h2>

          <CollapsibleSection title="Hotel Industry Quick Facts" icon={Bookmark}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { stat: '$12B', label: 'UAE Hospitality Market' },
                { stat: '700+', label: 'Hotels in Dubai' },
                { stat: '73-78%', label: 'Average Occupancy' },
                { stat: '20-25%', label: 'OTA Commission' },
                { stat: 'AED 600', label: 'Avg Room Rate' },
                { stat: 'AED 200', label: 'Avg F&B Spend' },
                { stat: '17M+', label: 'Annual Visitors' },
                { stat: '<20%', label: 'Repeat Guest Rate' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-blue-400 text-xl font-bold">{item.stat}</p>
                  <p className="text-slate-400 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 14: Power Phrases */}
        <div className="mb-8">
          <h2 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-[#0a1628] flex items-center justify-center text-xs font-black">14</span>
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
                  'Turn your restaurant into a destination',
                  'Own your guest data, not OTAs',
                  'Fill your spa on Tuesdays',
                  'Locals discovering your F&B',
                  '15% vs OTA\'s 25%',
                  'Revenue you\'d never see otherwise'
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
                  '"We\'re like a discount app"',
                  '"Replace your loyalty program"',
                  '"All hotels are using us"',
                  '"It\'s basically free"',
                  '"Your current program doesn\'t work"',
                  '"We compete with OTAs"'
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
          <h2 className="text-blue-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-blue-500 text-[#0a1628] flex items-center justify-center text-xs font-black">15</span>
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
                  <p className="text-emerald-400 text-sm">How to onboard hotel merchants</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Battle-tested campaigns to sign hotels and hospitality venues. F&B outlet focus with multi-property strategies.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Hotel Chain Conquest: Multi-property deals</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>F&B Director outreach campaigns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Hospitality trade show presence</span>
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
                  <p className="text-purple-400 text-sm">How to bring guests to hotels</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Viral campaigns to drive staycation bookings, Friday brunch traffic, and spa visits from residents.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Staycation Rewards: Weekend getaway coins</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Friday Brunch discovery campaigns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Spa Day referral programs</span>
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
                <p className="text-2xl font-bold text-blue-400">5</p>
                <p className="text-xs text-slate-400">Merchant Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">6</p>
                <p className="text-xs text-slate-400">User Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-cyan-400">AED 600</p>
                <p className="text-xs text-slate-400">Avg Stay Value</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#c9a227]">25%</p>
                <p className="text-xs text-slate-400">F&B Lift Target</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-blue-500/20 to-transparent rounded-2xl p-6 border border-blue-500/30 text-center">
          <Hotel className="text-blue-400 mx-auto mb-3" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Ready for the Meeting?</h3>
          <p className="text-slate-400 text-sm mb-4">Access the pitch deck and other materials</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/deck-merchant" className="px-4 py-2 bg-blue-500 text-white rounded-full font-semibold text-sm hover:bg-blue-600 transition-colors">
              View Hotel Deck
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
          Hotels & Hospitality Playbook v1.0 • Last Updated: February 2026
        </p>
      </div>
    </div>
  );
};

export default HotelPlaybook;
