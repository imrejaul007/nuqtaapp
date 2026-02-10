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
  Heart,
  Sparkles,
  UserCheck,
  Monitor,
  Camera,
  Megaphone,
  MapPin,
  Gift,
  Percent,
  Store,
  Scissors,
  Home,
  ShoppingBag
} from 'lucide-react';

/**
 * PET SERVICES SALES PLAYBOOK
 * Complete sales guide for pet service merchant acquisition
 *
 * Industry: Pet Grooming, Vet Clinics, Pet Shops, Pet Hotels/Daycare
 * Engine: A (High Margin 50-65%)
 * Commission: 15-20%
 *
 * UAE Market Stats:
 * - 500,000+ pet-owning households in UAE
 * - Pet industry size UAE: $500M+
 * - Average grooming spend: AED 150-300
 * - Average vet visit: AED 200-500
 * - Pet owners spend AED 5,000+/year on pets
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
          <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
            <Icon className="text-amber-400" size={20} />
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

const PetPlaybook = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-amber-500/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <Link href="/merchant-playbook" className="inline-flex items-center gap-2 text-slate-400 hover:text-amber-400 mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>All Playbooks</span>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 rounded-full mb-6">
              <Heart className="text-amber-400" size={16} />
              <span className="text-amber-400 text-sm font-medium">Engine A • High Margin</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              <span className="text-amber-400">Pet Services</span> Sales Playbook
            </h1>
            <p className="text-slate-400 text-lg">Complete guide to signing pet service merchants</p>
            <p className="text-slate-500 text-sm mt-2">From Cold Outreach to Signed Contract</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Pet Households', value: '500K+', color: 'amber' },
            { label: 'UAE Pet Market', value: '$500M+', color: 'yellow' },
            { label: 'Commission', value: '15-20%', color: 'emerald' },
            { label: 'Annual Spend', value: 'AED 5K+', color: 'orange' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <p className="text-amber-400 text-xl font-black">{stat.value}</p>
              <p className="text-slate-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-32">

        {/* Part 1: Industry Overview */}
        <div className="mb-8">
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">1</span>
            Industry Overview
          </h2>

          <CollapsibleSection title="Pet Services Market in UAE" icon={BarChart3} defaultOpen={true}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'Pet Households', value: '500K+' },
                  { label: 'Market Size', value: '$500M+' },
                  { label: 'Grooming Shops', value: '400+' },
                  { label: 'Vet Clinics', value: '200+' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                    <p className="text-amber-400 text-lg font-bold">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-red-400 font-semibold mb-2">🇦🇪 GCC-Specific Pain Points</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• <strong className="text-red-300">Pet owners forget grooming schedules</strong> - dogs go 8+ weeks without grooming</li>
                  <li>• <strong className="text-red-300">Mobile groomers steal customers</strong> - home service apps undercutting prices</li>
                  <li>• <strong className="text-red-300">Summer pet travel crisis</strong> - owners leave, pet hotels empty May-August</li>
                  <li>• <strong className="text-red-300">Instagram influencer pets</strong> cost AED 1,000+ per post for marketing</li>
                  <li>• <strong className="text-red-300">Expat pet relocation</strong> - customers leave UAE and take their pets</li>
                  <li>• <strong className="text-red-300">Impulse pet adoption</strong> - new owners don&apos;t budget for ongoing care</li>
                  <li>• <strong className="text-red-300">Pet shop vs groomer competition</strong> - shops adding grooming services</li>
                  <li>• <strong className="text-red-300">Vet clinic loyalty</strong> - customers already tied to one vet</li>
                  <li>• <strong className="text-red-300">Heat-related services underutilized</strong> - summer coat trims, cooling services</li>
                  <li>• <strong className="text-red-300">Pet hotel trust issues</strong> - owners hesitate to leave pets with strangers</li>
                </ul>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">✨ How Nuqta Solves Each Pain Point</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• <strong className="text-red-300">Forget grooming schedules?</strong> → <strong className="text-emerald-300">Automated reminders</strong> - every 4-6 weeks, push notification sent automatically</li>
                  <li>• <strong className="text-red-300">Mobile groomers steal?</strong> → <strong className="text-emerald-300">In-store rewards they can&apos;t match</strong> - coins make visiting YOU more valuable</li>
                  <li>• <strong className="text-red-300">Summer pet hotels empty?</strong> → <strong className="text-emerald-300">Staycation campaigns</strong> - residents who stay need pet care, target them</li>
                  <li>• <strong className="text-red-300">Influencer pets cost AED 1K?</strong> → <strong className="text-emerald-300">Pay only 15-20% on actual visits</strong> - no upfront marketing cost</li>
                  <li>• <strong className="text-red-300">Expats relocate pets?</strong> → <strong className="text-emerald-300">Continuous acquisition</strong> - 500K+ pet-loving users replacing departing customers</li>
                  <li>• <strong className="text-red-300">Impulse adoption = no budget?</strong> → <strong className="text-emerald-300">Loyalty education</strong> - coins teach owners to budget for regular care</li>
                  <li>• <strong className="text-red-300">Pet shops adding grooming?</strong> → <strong className="text-emerald-300">Differentiate with rewards</strong> - specialized service + coins beats shop grooming</li>
                  <li>• <strong className="text-red-300">Vet loyalty elsewhere?</strong> → <strong className="text-emerald-300">Win grooming/supplies</strong> - can&apos;t change vet but can change groomer</li>
                  <li>• <strong className="text-red-300">Summer services underutilized?</strong> → <strong className="text-emerald-300">Double coins on summer trims</strong> - promote coat cuts, cooling services</li>
                  <li>• <strong className="text-red-300">Pet hotel trust issues?</strong> → <strong className="text-emerald-300">Reviews + rewards = confidence</strong> - visible ratings + coin earning builds trust</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 2: Target Sub-Categories */}
        <div className="mb-8">
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">2</span>
            Target Sub-Categories
          </h2>

          <CollapsibleSection title="Pet Service Segments" icon={Heart}>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { name: 'Pet Grooming', icon: Scissors, count: '400+', avgSpend: 'AED 150-300', frequency: 'Every 4-6 weeks' },
                { name: 'Vet Clinics', icon: Heart, count: '200+', avgSpend: 'AED 200-500', frequency: '3-6x/year' },
                { name: 'Pet Hotels', icon: Home, count: '50+', avgSpend: 'AED 100-200/night', frequency: '2-4x/year' },
                { name: 'Pet Daycare', icon: Heart, count: '30+', avgSpend: 'AED 80-150/day', frequency: 'Weekly' },
                { name: 'Pet Shops', icon: ShoppingBag, count: '300+', avgSpend: 'AED 200-500', frequency: 'Monthly' },
                { name: 'Pet Training', icon: Target, count: '50+', avgSpend: 'AED 500-2,000', frequency: 'Package-based' },
              ].map((segment, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-2">
                    <segment.icon className="text-amber-400" size={20} />
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
                      <p className="text-amber-400 font-medium">{segment.frequency}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 3: Nuqta Service Packages */}
        <div className="mb-8">
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">3</span>
            Nuqta Service Packages
          </h2>

          <CollapsibleSection title="What Pet Services Get" icon={Gift}>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Pet Parent Loyalty', desc: 'Coins on grooming, vet visits, supplies', icon: Gift },
                { title: 'Grooming Reminders', desc: 'Automated notifications every 4-6 weeks', icon: Clock },
                { title: 'Service Upsells', desc: 'Promote spa packages, teeth cleaning, nail art', icon: Sparkles },
                { title: 'Pet Hotel Bookings', desc: 'Fill boarding during off-peak seasons', icon: Home },
                { title: 'Cross-Sell Products', desc: 'Earn coins on food, toys, accessories', icon: ShoppingBag },
                { title: 'Vaccination Reminders', desc: 'Annual checkup and vaccine notifications', icon: Calendar },
                { title: 'Referral Program', desc: 'Pet parents refer other pet parents', icon: UserCheck },
                { title: 'Pet Profile Data', desc: 'Know breed, size, preferences for personalization', icon: Monitor },
              ].map((feature, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10 flex gap-3">
                  <feature.icon className="text-amber-400 flex-shrink-0" size={20} />
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
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">4</span>
            The 60-Second Pitch
          </h2>

          <CollapsibleSection title="Perfect Pitch Script" icon={MessageSquare}>
            <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-xl p-6 border border-amber-500/30">
              <div className="space-y-4 text-slate-300">
                <p><span className="text-amber-400 font-bold">HOOK:</span> &quot;How often do your customers actually bring their dogs in for grooming on schedule?&quot;</p>

                <p><span className="text-amber-400 font-bold">PROBLEM:</span> &quot;Most pet owners know they should groom every 4-6 weeks but life gets busy. They forget, skip months, and when they do come back, they might pick the closest groomer - not you.&quot;</p>

                <p><span className="text-amber-400 font-bold">SOLUTION:</span> &quot;Nuqta keeps pet parents loyal. They earn coins on every visit, get automatic grooming reminders, and have a reason to always choose you. Plus, we help fill your pet hotel during slow periods.&quot;</p>

                <p><span className="text-amber-400 font-bold">PROOF:</span> &quot;Pet services on Nuqta see 50% increase in on-schedule grooming visits and 30% more upsells to premium services.&quot;</p>

                <p><span className="text-amber-400 font-bold">ASK:</span> &quot;Can I show you how [Business Name] would look on the app? Your regular customers probably have it already.&quot;</p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 5: ROI Calculator */}
        <div className="mb-8">
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">5</span>
            ROI Calculator
          </h2>

          <CollapsibleSection title="Financial Impact Example" icon={Calculator}>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">Example: Pet Grooming Salon (4 Groomers)</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Current customers:</span>
                    <span className="text-white">300 pets</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Average visit frequency:</span>
                    <span className="text-white">Every 8 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Improved frequency (every 5 weeks):</span>
                    <span className="text-emerald-400">+2.4 visits/pet/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Extra revenue (300 pets × 2.4 × AED 200):</span>
                    <span className="text-emerald-400 font-bold">+AED 144,000/year</span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2">
                    <span className="text-slate-400">Plus upsells (30% of visits):</span>
                    <span className="text-emerald-400">+AED 30,000/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Nuqta commission (18%):</span>
                    <span className="text-amber-400">-AED 31,320</span>
                  </div>
                  <div className="flex justify-between bg-emerald-500/20 p-2 rounded-lg">
                    <span className="text-emerald-400 font-bold">Net profit increase/year:</span>
                    <span className="text-emerald-400 font-bold">AED 142,680</span>
                  </div>
                </div>
              </div>

              <div className="bg-amber-500/10 rounded-xl p-4 border border-amber-500/20">
                <p className="text-amber-400 font-semibold">Key Insight:</p>
                <p className="text-slate-300 text-sm">Pet parents who groom on schedule spend AED 2,400/year vs AED 1,600 for irregular visitors. That&apos;s 50% more lifetime value per pet.</p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 6: Objection Handling */}
        <div className="mb-8">
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">6</span>
            Objection Handling
          </h2>

          <CollapsibleSection title="Common Objections & Responses" icon={Shield}>
            <div className="space-y-3">
              {[
                { objection: 'My regular customers always come back', response: 'Do they come on schedule? Most pet owners delay grooming by 2-3 weeks. That\'s 3 missed visits per year per customer.' },
                { objection: 'Pet parents are loyal to their groomer', response: 'They\'re loyal until life gets busy and they pick convenience. Coins keep them coming to YOU even when another groomer is closer.' },
                { objection: 'We\'re fully booked already', response: 'What about slow weekdays? Tuesday mornings? Nuqta helps fill the gaps and reduce no-shows.' },
                { objection: 'Our customers don\'t use apps', response: 'Pet owners in UAE are 25-45, highly smartphone-active. They\'re already using apps for everything else.' },
                { objection: 'We already send WhatsApp reminders', response: 'WhatsApp gets ignored. Nuqta notifications come with earning opportunity - "Your pet is due for grooming + earn 50 coins"' },
                { objection: 'Pet hotel is seasonal, can\'t help off-peak', response: 'Exactly why you need us! Nuqta can promote pet staycations and daycare during off-peak with bonus coins.' },
                { objection: 'We compete on quality, not rewards', response: 'Quality brings them once. Rewards bring them back on schedule. It\'s not either/or.' },
                { objection: '18% is too much of my margin', response: 'You only pay on incremental visits. A customer coming 8x instead of 6x per year - that\'s pure upside.' },
                { objection: 'We\'re a vet clinic, not retail', response: 'Pet wellness is perfect for loyalty. Annual checkups, vaccinations, dental cleanings - all benefit from reminders.' },
                { objection: 'Instagram works fine for us', response: 'Instagram costs AED 50+ per new customer. Nuqta costs nothing until they visit and pay.' },
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
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">7</span>
            Competitor Landscape
          </h2>

          <CollapsibleSection title="What Pet Services Use Today" icon={Target}>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'Instagram Marketing', weakness: 'No booking conversion tracking', nuqtaAdvantage: 'Track actual bookings, pay on visits' },
                  { name: 'WhatsApp Reminders', weakness: 'Manual, time-consuming', nuqtaAdvantage: 'Automatic grooming reminders' },
                  { name: 'Loyalty Stamp Cards', weakness: 'Pet owners lose them', nuqtaAdvantage: 'Digital, tied to pet profiles' },
                  { name: 'Pet Booking Apps', weakness: 'Take 15-20% commission', nuqtaAdvantage: 'You own the relationship' },
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
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">8</span>
            Discovery Questions
          </h2>

          <CollapsibleSection title="Questions to Uncover Pain Points" icon={MessageSquare}>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                'How many pets do you groom per day on average?',
                'What is the average time between groom visits?',
                'How do you remind customers about grooming?',
                'What percentage of customers return on schedule?',
                'Do you offer pet hotel/boarding? Occupancy rate?',
                'What is your slowest day of the week?',
                'Do you sell retail products? What % of revenue?',
                'How do customers typically find you?',
                'Do you have premium packages? What % buy them?',
                'Do you offer pick-up/delivery for grooming?',
              ].map((question, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-white/5 rounded-lg p-3 border border-white/10">
                  <span className="text-amber-400 font-bold text-sm">{idx + 1}.</span>
                  <p className="text-slate-300 text-sm">{question}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 9: Pre-Meeting Checklist */}
        <div className="mb-8">
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">9</span>
            Pre-Meeting Checklist
          </h2>

          <CollapsibleSection title="Research Checklist" icon={Users}>
            <div className="space-y-2">
              <ChecklistItem>Check Google/Instagram reviews and photos</ChecklistItem>
              <ChecklistItem>Look up their services and pricing</ChecklistItem>
              <ChecklistItem>Identify if they have pet hotel/daycare</ChecklistItem>
              <ChecklistItem>Check if they sell pet supplies</ChecklistItem>
              <ChecklistItem>Note their busiest and slowest days</ChecklistItem>
              <ChecklistItem>Find owner on Instagram/LinkedIn</ChecklistItem>
              <ChecklistItem>Prepare ROI with their price points</ChecklistItem>
              <ChecklistItem>Have 2-3 similar pet business case studies</ChecklistItem>
              <ChecklistItem>Bring QR materials and stickers</ChecklistItem>
              <ChecklistItem>Know pet population in their area</ChecklistItem>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Materials to Prepare" icon={FileText}>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { item: 'Pet Services Deck', desc: 'Cute, on-brand imagery' },
                { item: 'ROI Calculator', desc: 'Pre-filled with their prices' },
                { item: 'Reception Stickers', desc: 'Pet-friendly designs' },
                { item: 'Case Studies', desc: '2-3 similar pet service wins' },
                { item: 'Contract Template', desc: 'Ready for signature' },
                { item: 'Demo Phone', desc: 'Show pet owner app flow' },
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
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">10</span>
            Closing Scripts
          </h2>

          <CollapsibleSection title="Closing the Deal" icon={Target}>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">The Assumptive Close</h4>
                <p className="text-slate-300 text-sm italic">&quot;Great, let&apos;s get you set up with grooming and the pet hotel. Should we do the photo shoot this week when the salon is quieter?&quot;</p>
              </div>
              <div className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 rounded-xl p-4 border border-amber-500/20">
                <h4 className="text-amber-400 font-semibold mb-2">The Frequency Close</h4>
                <p className="text-slate-300 text-sm italic">&quot;You said customers come every 8 weeks on average. Our reminders bring that down to 5 weeks. That&apos;s 2 extra visits per pet per year - multiply by your 200 regular customers...&quot;</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl p-4 border border-purple-500/20">
                <h4 className="text-purple-400 font-semibold mb-2">The Pet Hotel Close</h4>
                <p className="text-slate-300 text-sm italic">&quot;Your pet hotel is only 60% full during weekdays. Nuqta users are looking for trustworthy boarding. One booking pays for 6 months of commission.&quot;</p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 11: Onboarding Timeline */}
        <div className="mb-8">
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">11</span>
            Onboarding Timeline
          </h2>

          <CollapsibleSection title="From Signature to Live" icon={Calendar}>
            <div className="space-y-3">
              {[
                { day: 'Day 1', task: 'Contract signed, trade license collected', owner: 'BDA' },
                { day: 'Day 2', task: 'System setup, services listed with pet types', owner: 'Operations' },
                { day: 'Day 3-4', task: 'Photo shoot (salon, pet hotel, cute pets!)', owner: 'Content Team' },
                { day: 'Day 5', task: 'Staff training (groomers + reception)', owner: 'Account Manager' },
                { day: 'Day 5', task: 'QR materials installed', owner: 'Account Manager' },
                { day: 'Day 6-7', task: 'Profile review and launch', owner: 'Operations' },
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white/5 rounded-lg p-3 border border-white/10">
                  <div className="bg-amber-500/20 px-3 py-1 rounded-full">
                    <span className="text-amber-400 text-sm font-bold">{step.day}</span>
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
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">12</span>
            Follow-Up Sequence
          </h2>

          <CollapsibleSection title="If Not Closed on Spot" icon={TrendingUp}>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">5-Day Follow-Up Sequence</h4>
                <div className="space-y-2">
                  {[
                    { day: 'Same Day', action: 'WhatsApp thank you + deck with cute pet photos', channel: 'WhatsApp' },
                    { day: 'Day 2', action: 'Share success story from similar pet salon', channel: 'WhatsApp' },
                    { day: 'Day 3', action: 'Call to discuss concerns', channel: 'Phone' },
                    { day: 'Day 5', action: 'Final push before holiday season', channel: 'WhatsApp' },
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm">
                      <span className="text-amber-400 font-medium w-20">{step.day}</span>
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
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">13</span>
            Key Stats to Remember
          </h2>

          <CollapsibleSection title="Pet Industry Quick Facts" icon={Bookmark}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { stat: '500K+', label: 'Pet Households UAE' },
                { stat: '$500M+', label: 'Pet Services Market' },
                { stat: 'AED 200', label: 'Avg Grooming Cost' },
                { stat: '6-8 weeks', label: 'Groom Frequency' },
                { stat: 'AED 150/night', label: 'Pet Hotel Rate' },
                { stat: '1,000+', label: 'Pet Service Providers' },
                { stat: '25%', label: 'Expat Pet Owners' },
                { stat: '<40%', label: 'On-Schedule Returns' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-amber-400 text-xl font-bold">{item.stat}</p>
                  <p className="text-slate-400 text-xs">{item.label}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 14: Power Phrases */}
        <div className="mb-8">
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">14</span>
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
                  'Pet parents who groom on schedule',
                  'Fill your slow weekdays',
                  'From 8 weeks to 5 weeks frequency',
                  'Reminders that pet owners actually act on',
                  'Pet hotel bookings year-round',
                  'Premium upsells that sell themselves'
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
                  '"Discount your grooming"',
                  '"Pet owners need incentives"',
                  '"Your current reminders don\'t work"',
                  '"We\'ll bring you tons of new pets"',
                  '"It\'s basically free marketing"',
                  '"Everyone uses us now"'
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
          <h2 className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-amber-500 text-[#0a1628] flex items-center justify-center text-xs font-black">15</span>
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
                  <p className="text-emerald-400 text-sm">How to onboard pet service merchants</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Battle-tested campaigns to sign pet groomers, vet clinics, and pet shops.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Pet community area blitz</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Pet expo presence events</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  <span>Vet clinic partnerships</span>
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
                  <p className="text-purple-400 text-sm">How to bring pet parents to services</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Viral campaigns for pet lovers. Grooming reminders, pet hotel promotions, and referral programs.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Pet parent community campaigns</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Holiday pet boarding promos</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Pet photo contest campaigns</span>
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
                <p className="text-2xl font-bold text-amber-400">5</p>
                <p className="text-xs text-slate-400">Merchant Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">6</p>
                <p className="text-xs text-slate-400">User Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-orange-400">AED 200</p>
                <p className="text-xs text-slate-400">Avg Transaction</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#c9a227]">50%</p>
                <p className="text-xs text-slate-400">Schedule Adherence</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-amber-500/20 to-transparent rounded-2xl p-6 border border-amber-500/30 text-center">
          <Heart className="text-amber-400 mx-auto mb-3" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Ready for the Meeting?</h3>
          <p className="text-slate-400 text-sm mb-4">Access the pitch deck and other materials</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/deck-merchant" className="px-4 py-2 bg-amber-500 text-white rounded-full font-semibold text-sm hover:bg-amber-600 transition-colors">
              View Pet Services Deck
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
          Pet Services Playbook v1.0 • Last Updated: February 2026
        </p>
      </div>
    </div>
  );
};

export default PetPlaybook;
