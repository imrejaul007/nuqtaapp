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
  Dumbbell,
  Heart,
  Activity,
  Sparkles,
  UserCheck,
  Monitor,
  Camera,
  Megaphone,
  MapPin,
  Gift,
  Percent,
  Store
} from 'lucide-react';

/**
 * GYM & FITNESS SALES PLAYBOOK
 * Complete sales guide for fitness merchant acquisition
 *
 * Industry: Gyms, Fitness Studios, Yoga, CrossFit, Personal Training
 * Engine: A (High Margin 50-70%)
 * Commission: 15-20%
 *
 * UAE Market Stats:
 * - Average gym membership: AED 300-600/month
 * - Average PT session: AED 150-300
 * - Retention rate industry: 50-60%
 * - Fitness market size UAE: $800M
 * - 15% of Nuqta LOIs are fitness
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
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
            <Icon className="text-emerald-400" size={20} />
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

const GymPlaybook = () => {
  return (
    <div className="min-h-screen bg-[#0a1628]">
      {/* Header */}
      <div className="bg-gradient-to-b from-emerald-500/20 to-transparent">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
          <Link href="/merchant-playbook" className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 mb-6 transition-colors">
            <ArrowLeft size={20} />
            <span>All Playbooks</span>
          </Link>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 rounded-full mb-6">
              <Dumbbell className="text-emerald-400" size={16} />
              <span className="text-emerald-400 text-sm font-medium">Engine A • High Margin</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
              <span className="text-emerald-400">Gym & Fitness</span> Sales Playbook
            </h1>
            <p className="text-slate-400 text-lg">Complete guide to signing fitness merchants</p>
            <p className="text-slate-500 text-sm mt-2">From Cold Outreach to Signed Contract</p>
          </div>
        </div>
      </div>

      {/* Quick Stats Bar */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Avg Membership', value: 'AED 400/mo' },
            { label: 'Avg PT Session', value: 'AED 200' },
            { label: 'Commission', value: '15-20%' },
            { label: 'Nuqta LOIs', value: '15%' }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center">
              <p className="text-emerald-400 text-xl font-black">{stat.value}</p>
              <p className="text-slate-400 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 pb-32">

        {/* Part 1: Industry Overview */}
        <div className="mb-8">
          <h2 className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-500 text-[#0a1628] flex items-center justify-center text-xs font-black">1</span>
            Industry Overview
          </h2>

          <CollapsibleSection title="Fitness Market in UAE" icon={BarChart3} defaultOpen={true}>
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { label: 'UAE Fitness Market', value: '$800M' },
                  { label: 'Gyms in Dubai', value: '1,200+' },
                  { label: 'Studios in Dubai', value: '500+' },
                  { label: 'Avg Margin', value: '50-70%' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                    <p className="text-emerald-400 text-lg font-bold">{stat.value}</p>
                    <p className="text-slate-400 text-xs">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <h4 className="text-red-400 font-semibold mb-2">🇦🇪 GCC-Specific Pain Points</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>• <strong className="text-red-300">50% of new members quit within 3 months</strong> - New Year motivation dies fast</li>
                  <li>• <strong className="text-red-300">ClassPass takes 30%+</strong> per class and trains members to gym-hop</li>
                  <li>• <strong className="text-red-300">High acquisition cost AED 200-500</strong> per member via ads</li>
                  <li>• <strong className="text-red-300">Summer exodus crisis</strong> - 40% drop in attendance June-August</li>
                  <li>• <strong className="text-red-300">Ramadan operational challenges</strong> - gym hours shift, attendance drops</li>
                  <li>• <strong className="text-red-300">1,200+ gyms in Dubai</strong> - new boutique studios opening monthly</li>
                  <li>• <strong className="text-red-300">Hotel gym competition</strong> - luxury hotels offer day passes to residents</li>
                  <li>• <strong className="text-red-300">Expat turnover</strong> - members leave UAE, need constant replacement</li>
                  <li>• <strong className="text-red-300">Corporate gym deals</strong> - employees get free/discounted access elsewhere</li>
                  <li>• <strong className="text-red-300">Home fitness trend</strong> - Peloton, Mirror, YouTube workouts reduce visits</li>
                  <li>• <strong className="text-red-300">PT poaching</strong> - personal trainers leave and take clients</li>
                  <li>• <strong className="text-red-300">No upsell data</strong> - don&apos;t know which members to target for PT/supplements</li>
                </ul>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">✨ How Nuqta Solves Each Pain Point</h4>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• <strong className="text-red-300">50% quit in 3 months?</strong> → <strong className="text-emerald-300">Coins = reason to keep going</strong> - members don&apos;t abandon rewards, 30% better retention</li>
                  <li>• <strong className="text-red-300">ClassPass takes 30%+?</strong> → <strong className="text-emerald-300">15-20% commission</strong> AND you keep the member data, not ClassPass</li>
                  <li>• <strong className="text-red-300">AED 200-500 per member?</strong> → <strong className="text-emerald-300">Pay only on actual membership</strong> - no upfront ad spend, discovered by 500K+ users</li>
                  <li>• <strong className="text-red-300">Summer 40% drop?</strong> → <strong className="text-emerald-300">Summer survival campaigns</strong> - double coins keep members who stayed coming</li>
                  <li>• <strong className="text-red-300">Ramadan attendance drops?</strong> → <strong className="text-emerald-300">Post-iftar workout targeting</strong> - push notifications for evening sessions</li>
                  <li>• <strong className="text-red-300">1,200+ gyms competing?</strong> → <strong className="text-emerald-300">Differentiate with rewards</strong> - be the gym where members earn, not just exercise</li>
                  <li>• <strong className="text-red-300">Hotel gym competition?</strong> → <strong className="text-emerald-300">Loyalty hotels can&apos;t match</strong> - day passes don&apos;t earn coins</li>
                  <li>• <strong className="text-red-300">Expat members leave?</strong> → <strong className="text-emerald-300">Continuous acquisition</strong> - new members from Nuqta replace departing expats</li>
                  <li>• <strong className="text-red-300">Corporate deals elsewhere?</strong> → <strong className="text-emerald-300">Personal rewards beat corporate</strong> - individual coins more valuable</li>
                  <li>• <strong className="text-red-300">Home fitness trend?</strong> → <strong className="text-emerald-300">Rewards for showing up</strong> - can&apos;t earn coins on YouTube workout</li>
                  <li>• <strong className="text-red-300">PT poaching?</strong> → <strong className="text-emerald-300">YOU own member data</strong> - trainers leave, member relationships stay</li>
                  <li>• <strong className="text-red-300">No upsell data?</strong> → <strong className="text-emerald-300">Know your members</strong> - target right people for PT, supplements, gear</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Target Sub-Categories" icon={Activity}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  category: 'Full-Service Gym',
                  avgBill: 'AED 300-600/mo',
                  frequency: '12-20x/month',
                  margin: '60%',
                  bestApproach: 'Focus on retention, supplements, PT upsell'
                },
                {
                  category: 'Boutique Studios',
                  avgBill: 'AED 100-200/class',
                  frequency: '8-12x/month',
                  margin: '55%',
                  bestApproach: 'Focus on class packages, community'
                },
                {
                  category: 'CrossFit Box',
                  avgBill: 'AED 600-1000/mo',
                  frequency: '12-20x/month',
                  margin: '50%',
                  bestApproach: 'Focus on community, competitions'
                },
                {
                  category: 'Yoga/Pilates Studio',
                  avgBill: 'AED 150-300/class',
                  frequency: '4-8x/month',
                  margin: '55%',
                  bestApproach: 'Focus on wellness, packages'
                },
                {
                  category: 'Personal Training',
                  avgBill: 'AED 200-400/session',
                  frequency: '8-12x/month',
                  margin: '70%',
                  bestApproach: 'Focus on results, long-term packages'
                },
                {
                  category: 'Swimming/Sports Club',
                  avgBill: 'AED 500-1500/mo',
                  frequency: '8-15x/month',
                  margin: '45%',
                  bestApproach: 'Focus on family membership, activities'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <h4 className="text-emerald-400 font-bold mb-2">{item.category}</h4>
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
                      <span className="text-emerald-400 ml-1">{item.margin}</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-xs italic">{item.bestApproach}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="What Nuqta Provides for Gyms" icon={Sparkles} defaultOpen={true}>
            <div className="space-y-4">
              <p className="text-slate-300 text-sm">
                Everything your gym needs to grow membership and increase retention - all included in one package.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  {
                    icon: UserCheck,
                    title: 'Dedicated Marketing Manager',
                    description: 'Personal account manager who understands fitness industry and handles all your marketing needs'
                  },
                  {
                    icon: Monitor,
                    title: 'Free POS System',
                    description: 'Modern point-of-sale system to track memberships, class bookings, and sales at no extra cost'
                  },
                  {
                    icon: Camera,
                    title: 'Content Creation',
                    description: 'Professional photography & videography of your gym, classes, trainers, and transformations'
                  },
                  {
                    icon: Users,
                    title: 'Influencer Marketing',
                    description: 'Connect with fitness influencers for gym tours, workout videos, and transformation stories'
                  },
                  {
                    icon: Percent,
                    title: 'Price Engineering',
                    description: 'Strategic pricing for memberships, packages, and PT sessions to maximize sign-ups'
                  },
                  {
                    icon: Megaphone,
                    title: 'Performance Marketing',
                    description: 'Targeted ads on Instagram, TikTok & Google to reach fitness enthusiasts in your area'
                  },
                  {
                    icon: MapPin,
                    title: 'Offline Marketing',
                    description: 'Flyers at offices, residential areas, and strategic locations to drive local memberships'
                  },
                  {
                    icon: Gift,
                    title: 'VAT Filing (Optional)',
                    description: 'We can help manage your VAT compliance as an add-on service'
                  }
                ].map((service, idx) => (
                  <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10 flex gap-3">
                    <div className="bg-emerald-500/20 p-2 rounded-lg h-fit">
                      <service.icon className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm mb-1">{service.title}</h4>
                      <p className="text-slate-400 text-xs">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Investment Breakdown */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/10 mt-4">
                <h4 className="text-white font-bold mb-3">📊 How We Invest Your Package Fee</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-emerald-400 font-bold text-2xl">70%</span>
                      <span className="text-emerald-400 text-sm font-medium">Content & Creative</span>
                    </div>
                    <ul className="text-slate-300 text-xs space-y-1">
                      <li>• Professional gym photography</li>
                      <li>• Workout & transformation videos</li>
                      <li>• Social media content</li>
                      <li>• UGC creation</li>
                      <li>• Fitness influencer deals</li>
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
                        Whatever you spend on your package, you get the <span className="text-green-400 font-bold">same amount as in-app advertising credit</span> to promote your gym to Nuqta users!
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

          <CollapsibleSection title="Competitor Landscape" icon={Target}>
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-emerald-400 font-medium py-2">Competitor</th>
                      <th className="text-left text-emerald-400 font-medium py-2">Model</th>
                      <th className="text-left text-emerald-400 font-medium py-2">Cost</th>
                      <th className="text-left text-emerald-400 font-medium py-2">Weakness</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300">
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">ClassPass</td>
                      <td className="py-2">Class marketplace</td>
                      <td className="py-2 text-red-400">30%+ per class</td>
                      <td className="py-2">Commoditizes gyms, owns data</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Gympass</td>
                      <td className="py-2">Corporate wellness</td>
                      <td className="py-2">Variable</td>
                      <td className="py-2">B2B only, low per-member value</td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-2 font-medium">Instagram Ads</td>
                      <td className="py-2">Advertising</td>
                      <td className="py-2 text-red-400">AED 200+/lead</td>
                      <td className="py-2">High cost, low conversion</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium text-emerald-400">Nuqta</td>
                      <td className="py-2">Loyalty + Discovery</td>
                      <td className="py-2 text-emerald-400">15-20%</td>
                      <td className="py-2 text-emerald-400">Best value</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">Our Advantage</h4>
                <p className="text-slate-300 text-sm">
                  ClassPass takes 30%+ and trains members to gym-hop. Nuqta rewards loyalty at YOUR gym,
                  keeps members longer, and brings in new members who discover you through the app.
                </p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 2: The Pitch */}
        <div className="mb-8">
          <h2 className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-500 text-[#0a1628] flex items-center justify-center text-xs font-black">2</span>
            The Pitch
          </h2>

          <CollapsibleSection title="60-Second Pitch" icon={Zap} defaultOpen={true}>
            <div className="bg-gradient-to-r from-emerald-500/20 to-transparent rounded-xl p-4 border border-emerald-500/30">
              <p className="text-white leading-relaxed">
                &quot;Hey [Name], I noticed [something about their gym]. Quick question - what&apos;s your member retention like after the first 3 months?
                <br /><br />
                Industry average is about 50% quit by month 3. That&apos;s a lot of wasted acquisition cost.
                <br /><br />
                We&apos;ve built something that helps. When members pay their subscription or PT session, they earn 10% back in Nuqta coins. These coins can be spent anywhere - but they can ALSO be spent at your gym café, supplements, or merchandise.
                <br /><br />
                So now members have two reasons to stay: 1) They&apos;re earning rewards, and 2) They can spend those rewards AT your gym, driving more revenue.
                <br /><br />
                Our gyms see 30% better retention. You only pay 15-20% on Nuqta-attributed revenue. Want to see the math for your gym?&quot;
              </p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="ROI Calculator" icon={Calculator}>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <h4 className="text-white font-semibold mb-3">Step-by-Step Calculation</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">1. Monthly membership value:</span>
                    <span className="text-white font-mono">AED ___</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">2. Nuqta members (estimate 50-200):</span>
                    <span className="text-white font-mono">___ members</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg">
                    <span className="text-slate-400">3. Avg membership duration:</span>
                    <span className="text-emerald-400 font-mono">× 1.3x longer</span>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-emerald-500/20 rounded-lg border border-emerald-500/30">
                    <span className="text-emerald-400">4. Extra LTV per member:</span>
                    <span className="text-emerald-400 font-mono font-bold">AED ___</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/20">
                <h4 className="text-emerald-400 font-semibold mb-2">Example: Boutique Gym</h4>
                <p className="text-slate-300 text-sm">
                  AED 400/mo × 100 Nuqta members × 3 extra months = <strong className="text-white">AED 120,000/year extra</strong>
                  <br />
                  Cost: AED 19,200 (16%) | <strong className="text-emerald-400">Extra profit: AED 52,800/year</strong>
                </p>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 3: Objection Handling */}
        <div className="mb-8">
          <h2 className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-500 text-[#0a1628] flex items-center justify-center text-xs font-black">3</span>
            Objection Handling
          </h2>

          <CollapsibleSection title="Top 10 Objections" icon={Shield} defaultOpen={true}>
            <div className="space-y-4">
              {[
                {
                  objection: '"We already use ClassPass"',
                  response: 'ClassPass trains members to gym-hop and takes 30%+. Nuqta rewards LOYALTY at YOUR gym. Use both: ClassPass for discovery, Nuqta to convert visitors into loyal members.'
                },
                {
                  objection: '"Our members don\'t need another app"',
                  response: 'They already have Nuqta for their daily spending. Now they can earn when they pay YOU. It\'s not adding an app - it\'s giving them a benefit they already use.'
                },
                {
                  objection: '"We have our own membership app"',
                  response: 'Great - Nuqta works alongside it. Your app handles bookings, Nuqta handles rewards and discovery. Different purposes, both valuable.'
                },
                {
                  objection: '"15% is too much"',
                  response: 'You\'re probably paying 30%+ to ClassPass per class. And Instagram ads cost AED 200+ per lead. We cost less and bring members who STAY, not just try once.'
                },
                {
                  objection: '"We\'re a premium gym, we don\'t discount"',
                  response: 'This isn\'t discounting - it\'s rewarding. Members pay full price and earn coins for future use. It actually increases perceived value, not decreases it.'
                },
                {
                  objection: '"Our retention is already good"',
                  response: 'Amazing! But imagine if it was even better. Even 10% improvement on 100 members × AED 400/mo × 12 months = AED 48,000 extra revenue.'
                },
                {
                  objection: '"We only do annual memberships"',
                  response: 'Perfect - Nuqta can reward annual sign-ups AND encourage members to spend on PT, classes, café. It\'s not just about retention - it\'s about wallet share.'
                },
                {
                  objection: '"Let me think about it"',
                  response: 'What specific concerns do you have? I want to address them now. Also, we only partner with 3 gyms per area - [competitor gym] expressed interest too.'
                },
                {
                  objection: '"Maybe after New Year rush"',
                  response: 'Actually, signing up NOW means you catch the New Year rush with Nuqta active. All those new members will be earning coins from Day 1 - better retention.'
                },
                {
                  objection: '"We\'re part of a chain"',
                  response: 'Even better - we can do a pilot at your location. If it works, you bring data to your management. Win for you personally.'
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
                    <ChevronRight className="text-green-400 flex-shrink-0 mt-0.5" size={16} />
                    <p className="text-slate-300 text-sm">{item.response}</p>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Part 4: Closing */}
        <div className="mb-8">
          <h2 className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-500 text-[#0a1628] flex items-center justify-center text-xs font-black">4</span>
            Closing the Deal
          </h2>

          <CollapsibleSection title="Closing Scripts" icon={Target} defaultOpen={true}>
            <div className="space-y-4">
              <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 className="text-green-400" size={18} />
                  <h4 className="text-green-400 font-semibold">The Retention Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;Think about it: if just 10 members stay 3 extra months because of Nuqta, that&apos;s AED 12,000 extra. Shall we get you set up before the busy season?&quot;
                </p>
              </div>

              <div className="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="text-yellow-400" size={18} />
                  <h4 className="text-yellow-400 font-semibold">The Competition Close</h4>
                </div>
                <p className="text-slate-300 text-sm">
                  &quot;We only partner with 3 gyms per area. [Gym name] down the road asked for a meeting. First to sign gets priority. Want to lock in your spot?&quot;
                </p>
              </div>

              <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-500/30">
                <h4 className="text-emerald-400 font-semibold mb-2">Never Leave Without:</h4>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>✓ Signed LOI or contract</li>
                  <li>✓ OR specific follow-up date</li>
                  <li>✓ WhatsApp of decision maker</li>
                  <li>✓ Membership pricing info</li>
                </ul>
              </div>
            </div>
          </CollapsibleSection>
        </div>

        {/* Quick Reference */}
        <div className="mb-8">
          <h2 className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-500 text-[#0a1628] flex items-center justify-center text-xs font-black">5</span>
            Quick Reference
          </h2>

          <CollapsibleSection title="Key Stats" icon={Bookmark} defaultOpen={true}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { label: 'UAE Fitness Market', value: '$800M' },
                { label: '3-Month Retention', value: '50%' },
                { label: 'With Nuqta', value: '65%' },
                { label: 'Commission Range', value: '15-20%' },
                { label: 'Avg Membership', value: 'AED 400' },
                { label: 'LTV Increase', value: '+30%' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-3 text-center border border-white/10">
                  <p className="text-emerald-400 text-lg sm:text-xl font-bold">{stat.value}</p>
                  <p className="text-slate-400 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Power Phrases" icon={Zap}>
            <div className="space-y-2">
              {[
                '30% better member retention',
                'Pay only on success',
                'Members stay longer, spend more',
                '15% vs 30% to ClassPass',
                'You keep 100% of member data',
                'Rewards that work across UAE'
              ].map((phrase, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-green-500/10 rounded-lg px-3 py-2 border border-green-500/20">
                  <CheckCircle2 className="text-green-400 flex-shrink-0" size={16} />
                  <p className="text-white text-sm font-medium">{phrase}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>
        </div>

        {/* Marketing Campaigns Section */}
        <div className="mb-8">
          <h2 className="text-emerald-400 text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-emerald-500 text-[#0a1628] flex items-center justify-center text-xs font-black">★</span>
            Marketing Campaigns
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Merchant Acquisition Campaign */}
            <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-2xl p-6 border border-teal-500/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-teal-500/30 flex items-center justify-center">
                  <Store className="text-teal-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Merchant Acquisition</h3>
                  <p className="text-teal-400 text-sm">How to onboard fitness merchants</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Battle-tested campaigns to sign gyms, yoga studios, and fitness centers. Membership retention focus with streak-based loyalty.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-teal-400" />
                  <span>Category Conquest: Fitness vertical domination</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-teal-400" />
                  <span>Success Academy: Member retention training</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-teal-400" />
                  <span>Event Blitz: Fitness expo acquisitions</span>
                </div>
              </div>
              <Link
                href="/marketing-war-room?tab=merchant-campaigns"
                className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-lg font-semibold text-sm hover:bg-teal-600 transition-colors"
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
                  <p className="text-purple-400 text-sm">How to bring members to gyms</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm mb-4">
                Viral campaigns to drive fitness enthusiasts. Workout streak rewards, buddy referrals, and transformation challenges.
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Streak Masters: Daily workout rewards</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Golden Chain: Gym buddy referrals</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <CheckCircle2 size={14} className="text-purple-400" />
                  <span>Neighborhood Champions: Local fitness focus</span>
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
                <p className="text-2xl font-bold text-emerald-400">5</p>
                <p className="text-xs text-slate-400">Merchant Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-purple-400">6</p>
                <p className="text-xs text-slate-400">User Campaigns</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-teal-400">30%</p>
                <p className="text-xs text-slate-400">Retention Boost</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#c9a227]">2x</p>
                <p className="text-xs text-slate-400">Member LTV Target</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Footer */}
        <div className="bg-gradient-to-r from-emerald-500/20 to-transparent rounded-2xl p-6 border border-emerald-500/30 text-center">
          <Dumbbell className="text-emerald-400 mx-auto mb-3" size={32} />
          <h3 className="text-white font-bold text-lg mb-2">Ready for the Meeting?</h3>
          <p className="text-slate-400 text-sm mb-4">Access the pitch deck and other materials</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/deck-merchant" className="px-4 py-2 bg-emerald-500 text-white rounded-full font-semibold text-sm hover:bg-emerald-600 transition-colors">
              View Fitness Deck
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
          Gym & Fitness Playbook v1.0 • Last Updated: February 2026
        </p>
      </div>
    </div>
  );
};

export default GymPlaybook;
